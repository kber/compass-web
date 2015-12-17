import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import { PropTypes } from 'react-router';

import style from './left-menu.scss';

const menuConfig = [{
  caption: 'Home',
  path: ['/home', ''],
  onlyActiveOnIndex: true
}, {
  caption: 'Profile',
  path: '/profile'
}, {
  caption: 'Login',
  path: '/login'
}];

const itemClass = (path, onlyActiveOnIndex, history) => {
  if (Array.isArray(path)) {
    if (path.findIndex((onePath) => history.isActive(onePath, null, onlyActiveOnIndex)) >= 0) {
      return style.active;
    }
  } else if (history.isActive(path)) {
    return style.active;
  }
};

export default class extends Component {
  static contextTypes = {
    history: PropTypes.history
  };

  render() {
    const { history } = this.context;

    const menuItems = menuConfig.map((item) => {
      const { path, caption, onlyActiveOnIndex } = item;
      return (
        <ListItem key={path}
                  caption={caption}
                  className={itemClass(path, onlyActiveOnIndex, history)}
                  onClick={() => history.push(item.path)}
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
