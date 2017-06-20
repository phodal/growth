import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import AppStyle from '../../../../theme/styles';
import TWBOOKS from '../../../../constants/TWBOOKS';
import PageItem from '../../../../components/discover/thought-works-books/view/DomainDetailPageItem';

function getBooks(domain) {
  switch (domain) {
    case 'practical':
      return TWBOOKS['zh-cn'].practical.books;
    case 'architecture':
      return TWBOOKS['zh-cn'].architecture.books;
    case 'methodology':
      return TWBOOKS['zh-cn'].methodology.books;
    case 'leadership':
      return TWBOOKS['zh-cn'].leadership.books;
    default:
      return [];
  }
}

class DomainDetailPage extends Component {
  static componentName = 'DomainDetailPage';

  static propTypes = {
    domain: PropTypes.string.isRequired,
  };

  static defaultProps = {
    domain: 'practical',
  };

  constructor(props) {
    super(props);
    this.state = {
      books: getBooks(this.props.domain),
      data: [
        { name: '基础篇', books: getBooks(this.props.domain).basic },
        { name: '进阶篇', books: getBooks(this.props.domain).intermediate },
        { name: '高级篇', books: getBooks(this.props.domain).advanced },
      ],
    };
  }

  render() {
    const rows = this.state.data.map((val, index) => <PageItem content={val} key={'key'.concat(index)} />);
    return <ScrollView style={AppStyle.detailBasisStyle}>{rows}</ScrollView>;
  }
}
export default DomainDetailPage;
