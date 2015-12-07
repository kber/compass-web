import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateName } from '../actions/profile';

@connect(
  state => ({profile: state.profile}),
  dispatch => bindActionCreators({ updateName }, dispatch)
)
export default class extends Component {
  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <p>API_BASE_URL: {API_BASE_URL}</p>
        <p>Name: {this.props.profile.name}</p>
        <input type="text" onChange={(event) => this.props.updateName(event.target.value)}/>
      </div>
    );
  }
}
