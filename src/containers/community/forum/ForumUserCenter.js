import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import FormValidation from 'tcomb-form-native';

const Person = FormValidation.struct({
  username: FormValidation.String,
  password: FormValidation.String,
  rememberMe: FormValidation.Boolean,
});

const options = {
  fields: {
    username: {
      label: '邮箱',
      error: '请输入有效邮箱',
      autoCapitalize: 'none',
      clearButtonMode: 'while-editing',
    },
    password: {
      label: '密码',
      error: '密码应该太于六位',
      clearButtonMode: 'while-editing',
      secureTextEntry: true,
    },
    rememberMe: {
      label: '保持登录',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});


class ForumUserCenter extends Component {
  static componentName = 'ForumUserCenter';

  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  onPress() {
    console.log(this.state);
  }

  render() {
    const Form = FormValidation.form.Form;

    return (
      <View style={styles.container}>
        <Form
          ref={(form) => { this.form = form; }}
          type={Person}
          value={this.state.value}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor={'#99d9f4'}>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ForumUserCenter;
