import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { login } from '../actions/user';

@connect(
  state => ({serverErrors: state.exception.serverErrors}),
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
      handleSubmit,
      login,
      serverErrors
    } = this.props;

    const accountNameError = serverErrors.find((error) => error.field === 'accountName');
    const passwordError = serverErrors.find((error) => error.field === 'password');

    return (
      <form onSubmit={handleSubmit((data) => login(data))}>
        <Input type='text'
               label='Username'
               error={accountNameError && accountNameError.message}
               name='username'
          {...accountName}/>
        <Input type='password'
               label='Password'
               error={passwordError && passwordError.message}
               name='Password'
          {...password}/>

        <Button label='Login'
                raised
                primary/>
      </form>
    );
  }
}
