import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

import style from './layout.scss';
import LeftMenu from './components/left-menu';

export default class extends Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return (
      <div>
        <AppBar className={style.header}>
          <a href="/">Compass</a>
        </AppBar>

        <div className={style.container}>
          <LeftMenu/>

          <div className={style.content}>
            {this.props.children}
          </div>
        </div>

        <footer>Footer</footer>
      </div>
    );
  }
}
