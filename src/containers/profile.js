import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-toolbox/lib/button';

import { updateName } from '../actions/profile';

@connect(
  state => ({profile: state.profile}),
  dispatch => bindActionCreators({updateName}, dispatch)
)
export default class extends Component {
  render() {
    return (
      <div>
        <h3>Profile Page</h3>

        <p>Name: {this.props.profile.name}</p>
        <input type="text"
               defaultValue={this.props.profile.name}
               onChange={(event) => this.props.updateName(event.target.value)}/>
      </div>
    );
  }
}
