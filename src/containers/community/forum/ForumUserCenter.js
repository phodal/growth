import React, { Component } from 'react';
import { View } from 'react-native';
import FormValidation from 'tcomb-form-native';

const Person = FormValidation.struct({
  username: FormValidation.String,
  password: FormValidation.Number,
  rememberMe: FormValidation.Boolean,
});

const options = {}; // optional rendering options (see documentation)

class ForumUserCenter extends Component {
  static componentName = 'ForumUserCenter';

  render() {
    const Form = FormValidation.form.Form;

    return (
      <View style={{ backgroundColor: '#fff' }}>
        <Form
          type={Person}
          options={options}
        />
      </View>
    );
  }
}

export default ForumUserCenter;
