import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';

export default class extends Component {
  render() {
    return (
      <div>
        <h3>Home Page</h3>
        <p>API_BASE_URL: {API_BASE_URL}</p>
      </div>
    );
  }
}
