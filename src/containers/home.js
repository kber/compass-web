import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <p>NODE_ENV: {NODE_ENV}</p>
        <p>API_BASE_URL: {API_BASE_URL}</p>
      </div>
    );
  }
}
