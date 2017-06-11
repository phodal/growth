import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PaperIntroView extends Component {
  static componentName = 'PaperIntroView';

  render() {
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <Text>本书是我在编程生涯初期的一些体会，它更像是一本关于Web开发的索引书籍，但其实这些索引正是我读了大量书籍后，自己对精髓之处进行的理解加工。
        在这本书里，你会看到我对很多知识点进行了概括，并以实战的方式将一个个知识点连接到一起。</Text>

        <Text>在最开始的时候，我曾经想将书名命名为实习记。后来又觉得虽然这是在我实习期间学到的知识，但其实很多内容在其他公司是学不到的。
        因此，在电子书里将其命名为Growth，它不仅是在让读者增长，也在让我自己增长。</Text>

        <Text>目录结构</Text>

        <Text>本书从结构上分成了三部分，每个部分都会不同的侧重点。</Text>
      </View>
    );
  }
}

export default PaperIntroView;
