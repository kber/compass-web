import React, { Component } from 'react';

export default class extends Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render() {
    return (
      <div>
        <header>Header</header>
        <div>
          {this.props.children}
        </div>
        <footer>Footer</footer>
      </div>
    );
  }
}
