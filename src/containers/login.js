import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { login } from '../actions/user';

@connect(
  null,
  dispatch => bindActionCreators({ login }, dispatch)
)
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
      <form onSubmit={handleSubmit(this.props.login(accountName.value, password.value))}>
        <Input type='text'
               label='Username'
               {...accountName}
               name='username'/>
        <Input type='password'
               label='Password'
               {...password}
               name='Password'/>

        <Button label='Login'
                raised
                primary/>
      </form>
    );
  }
}
