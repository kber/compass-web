import React, { Component } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'react-toolbox/lib/snackbar';

import { hideServerError } from '../actions/exception';
import style from './server-error.scss';

@connect(
  state => ({serverError: state.exception.serverError}),
  { hideServerError }
)
export default class extends Component {
  render() {
    const {
      serverError: { visible, message },
      hideServerError
    } = this.props;

    return (
      <Snackbar
        className={style.root}
        action="Dismiss"
        active={visible}
        icon="report_problem"
        label={message}
        timeout={2000}
        onClick={() => hideServerError()}
        onTimeout={() => hideServerError()}
        type="warning"/>
    );
  }
}
