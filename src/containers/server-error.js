import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'react-toolbox/lib/snackbar';

import style from './server-error.scss';

@connect(
  state => ({serverError: state.exception.serverError})
)
export default class extends Component {
  state = {
    active: false
  };

  hide = () => {
    this.setState({active: false});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({active: true});
  }

  render() {
    return (
      <Snackbar
        className={style.root}
        action="Dismiss"
        active={this.state.active}
        icon="report_problem"
        label={this.props.serverError.message}
        timeout={2000}
        onClick={this.hide}
        onTimeout={this.hide}
        type="warning"/>
    );
  }
}
