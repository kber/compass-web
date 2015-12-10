import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';

@connect(
  state => {
    return {
      currentUser: Object.assign({},
        state.currentUser,
        state.users.find(user => user.id === state.currentUser.id)
      )
    };
  }
)
export default class extends Component {
  render() {
    return (
      <div>
        <h3>Profile Page</h3>

        <p>Account Name: {this.props.currentUser.accountName}</p>
      </div>
    );
  }
}
