import React, { Component } from 'react';
import { Link } from 'react-router';
// import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  handleLogIn = () => {
    alert('log in dude!');
  }

  render() {
    return (
      <div>
        <Helmet title="Home"/>

        <div className="container">
          <button onClick={this.handleLogIn}>Log in</button>
          <br />
          <Link to="elegir-jugador">Elegir jugador</Link>
        </div>
      </div>
    );
  }
}
