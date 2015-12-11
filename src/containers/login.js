import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { login } from '../actions/user';

const submit = (data, dispath) => {
  return login(data)(dispath).catch((error) => {
    let object = {};
    error.errors.forEach((fieldError) => {
      object[fieldError.field] = fieldError.message;
    });
    throw object;
  });
};

@reduxForm({
  form: 'login',
  fields: ['accountName', 'password']
})
export default class extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {
        accountName,
        password
      },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit(submit)}>
        <Input type='text'
               label='Username'
               name='username'
          {...accountName}/>
        <Input type='password'
               label='Password'
               name='Password'
          {...password}/>

        <Button label='Login'
                raised
                primary/>
      </form>
    );
  }
}
