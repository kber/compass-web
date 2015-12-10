import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import style from './layout.scss';
import LeftMenu from './components/left-menu';

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
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <div>
        <AppBar className={style.header}>
          <Link to="/">Compass</Link>
          Is Login: {this.props.currentUser.isLogin ? 'YES' : 'NO'}
          Account Name: {this.props.currentUser.accountName}
        </AppBar>

        <div className={style.container}>
          <LeftMenu/>

          <div className={style.content}>
            {this.props.children}
          </div>
        </div>

        <footer className={style.footer}>
          Kber &copy; 2015
        </footer>
      </div>
    );
  }
}
