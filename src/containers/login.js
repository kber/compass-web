import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';

import { login } from '../actions/user';

@connect(
  null,
  dispatch => bindActionCreators({login}, dispatch)
)
export default class extends Component {
  state = {accountName: '', password: ''};

  render() {
    return (
      <div>
        <Input type='text'
               label='Username'
               value={this.state.accountName}
               onChange={(value) => this.setState({accountName: value})}
               name='username'/>
        <Input type='password'
               label='Password'
               value={this.state.password}
               onChange={(value) => this.setState({password: value})}
               name='Password'/>

        <Button label='Login'
                onClick={() => this.props.login(this.state.accountName, this.state.password)}
                raised
                primary/>
      </div>
    );
  }
}
