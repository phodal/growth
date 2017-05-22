import React, { Component, PropTypes } from 'react';
import {
  View,
  ListView,
  RefreshControl,
  Text,
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';

import AppColors from '../../../theme/colors';

class ForumView extends Component {
  static componentName = 'ForumView';

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    canLoadMoreContent: PropTypes.bool.isRequired,
    onLoadMoreAsync: PropTypes.func.isRequired,
    element: PropTypes.func.isRequired,
    reFetch: PropTypes.func.isRequired,
    dataUrl: PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.state = {
      isRefreshing: true,
      canLoadMoreContent: false,
      isLoadMoreAsync: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentWillMount() {
    // TODO: check componentWillReceiveProps problem
    if (this.props.data.length > 0 && this.state.dataSource.getRowCount() < 1) {
      this.setState({
        dataSource: this.getUpdatedDataSource(this.props),
        canLoadMoreContent: this.props.canLoadMoreContent,
        dataUrl: this.props.dataUrl,
        isRefreshing: false,
      });
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      dataSource: this.getUpdatedDataSource(props),
      canLoadMoreContent: props.canLoadMoreContent,
      dataUrl: props.dataUrl,
      isRefreshing: false,
    });
  }

  onLoadMoreAsync = () => {
    this.setState({ isLoadMoreAsync: true });
    this.props.onLoadMoreAsync()
    .then(() => {
      this.setState({ isLoadMoreAsync: false });
    });
  };

  getUpdatedDataSource(props) {
    const rows = props.data;
    const ids = rows.map((obj, index) => index);

    return this.state.dataSource.cloneWithRows(rows, ids);
  }

  reFetch = () => {
    if (this.props.reFetch) {
      this.setState({ isRefreshing: true });

      this.props.reFetch({ dataUrl: this.state.dataUrl })
      .then(() => {
        this.setState({ isRefreshing: false });
      });
    }
  };


  render = () => {
    const { data } = this.props;
    const { isRefreshing, dataSource, canLoadMoreContent } = this.state;

    if (!isRefreshing && (!data || data.length < 1)) {
      return <Text>Error</Text>;
    }

    return (
      <View>
        <ListView
          initialListSize={10}
          renderScrollComponent={props => <InfiniteScrollView {...props} />}
          renderRow={this.props.element}
          dataSource={dataSource}
          canLoadMore={canLoadMoreContent}
          onLoadMoreAsync={this.onLoadMoreAsync}
          refreshControl={
            this.props.reFetch ?
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this.reFetch}
                tintColor={AppColors.brand.primary}
              />
              : null
          }
        />

      </View>
    );
  };
}

export default ForumView;
