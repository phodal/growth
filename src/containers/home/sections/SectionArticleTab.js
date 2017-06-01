import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as shortid from 'shortid';

import Launch from '../../../components/discover/Launch';

class SectionArticleTab extends Component {
  static componentName = 'SectionArticleTab';
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    sectionInfo: PropTypes.object.isRequired,
  };

  render() {
    const articlesView = this.props.sectionInfo.articlesView;

    if (!articlesView) {
      return <Text />;
    }

    const articleViewComponent = articlesView[0].articles.map(article => (
      <ListItem
        key={shortid.generate()}
        title={article.title}
        onPress={() => Launch.localArticleView(article.slug)}
      />
    ));

    return (
      <View>
        <View style={{ backgroundColor: '#2d89ef' }}>
          <Text style={{ margin: 10, color: '#fff', textAlign: 'center' }}>了解优秀软件工程实践所需的信息</Text>
        </View>
        <List>
          {articleViewComponent}
        </List>
      </View>
    );
  }
}

export default SectionArticleTab;
