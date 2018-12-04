import React, { Component } from 'react';
import PlayerContainer from './PlayerContainer'
import Axios from 'axios';
import NBA from 'nba'
import { getMainColor } from 'nba-color';
import gsw from './gsw.json'


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.player,
      playersStats: {},
      playerRender: false,
    }

    this.myFunc = this.myFunc.bind(this);

  }

  myFunc(event) {
    if (document.querySelector('table')) {
      document.querySelector('table').remove()
    }
    let playersStats = [];
    console.log(event.target.id)
    NBA.stats.playerProfile({ PlayerID: event.target.id })
      .then(res => res.seasonTotalsRegularSeason.pop())
      .then(res => playersStats.push(res))
      .then(() => this.setState(prevState => ({ ...prevState, playersStats, playerRender: true })))
    console.log("my props", this.state)
  };


  render() {
    const borderStyle = {
      borderBottom: `1px solid ${this.props.color}`
    };
    const { playerId, player, position } = this.props;

    return (
      <div className="player" style={borderStyle} >
        {this.state.playerRender &&
          <PlayerContainer stats={this.state.playersStats} player={player} playerId={playerId} teamId={this.props.teamId} />
        }
        <span id={playerId} onClick={(e) => this.myFunc(e)}>{player} {position} </span>
      </div>
    );
  }
}


export default Players;