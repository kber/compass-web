import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import { PropTypes } from 'react-router';

import style from './left-menu.scss';

const menuConfig = [{
  caption: 'Home',
  path: '/home'
}, {
  caption: 'Profile',
  path: '/profile'
}, {
  caption: 'Login',
  path: '/login'
}];

export default class extends Component {
  static contextTypes = {
    history: PropTypes.history
  };

  render() {
    const menuItems = menuConfig.map((item) => {
      return (
        <ListItem key={item.path}
                  caption={item.caption}
                  className={this.context.history.isActive(item.path) ? style.active : ''}
                  to={'/#' + item.path}
                  selectable/>
      );
    });
    return (
      <aside className={style.root}>
        <List selectable ripple>
          {menuItems}
        </List>
      </aside>
    );
  }
}
