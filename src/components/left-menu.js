import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';

import style from './left-menu.scss';

export default class extends Component {
  render() {
    return (
      <aside>
        <List selectable ripple>
          <ListItem className={style.item} caption="Home" to="/#/home" selectable/>
          <ListItem caption="Profile" to="/#/profile" selectable/>
        </List>
      </aside>
    );
  }
}
