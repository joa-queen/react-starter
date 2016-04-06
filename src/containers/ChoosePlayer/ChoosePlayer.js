import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {isLoaded, load as loadPlayers} from 'redux/modules/players';
import { asyncConnect } from 'redux-async-connect';
import { Link } from 'react-router';

@asyncConnect([{
  deferred: false,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadPlayers());
    }
  }
}])

@connect(
  state => ({
    players: state.players.data,
    error: state.players.error,
    loading: state.players.loading
  }))

export default class ChoosePlayer extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <Helmet title="Elegí tu jugador"/>

        {/* Replace all this div content with mock */}
        <div className="container">
          <Link to="/">Home</Link>
          <br />
          Elegí tu jugador:

          <ul>
            {this.props.players.map((player, id) => {
              return <li key={id}>{player.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
