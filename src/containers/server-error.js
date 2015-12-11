import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from 'react-toolbox/lib/snackbar';

import style from './server-error.scss';
import { cleanServerError } from '../actions/exception';

@connect(
  state => ({serverError: state.exception.serverError}),
  dispatch => bindActionCreators({ cleanServerError }, dispatch)
)
export default class extends Component {
  state = {
    active: false
  };

  hide = () => {
    this.setState({active: false});
    this.props.cleanServerError();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.serverError.length > 0 && nextProps.serverError !== '') {
      this.setState({active: true});
    }
  }

  render() {
    return (
      <Snackbar
        className={style.root}
        action="Dismiss"
        active={this.state.active}
        icon="report_problem"
        label={this.props.serverError}
        timeout={2000}
        onClick={this.hide}
        onTimeout={this.hide}
        type="warning"/>
    );
  }
}
