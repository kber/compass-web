import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

import style from './layout.scss';

export default class extends Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render() {
    return (
      <div className={style.container}>
        <AppBar fixed flat>
          <a href="/home">React Toolbox Docs</a>
        </AppBar>
        <div>
          {this.props.children}
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}
