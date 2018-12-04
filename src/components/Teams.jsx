import React, { Component } from 'react';
import Players from './Players'
import axios from 'axios'
import { getMainColor } from 'nba-color';
import gsw from './gsw.json'



class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abbreviation: this.props.abbreviation.toLowerCase(),
      teamId: this.props.teamId,
      name: this.props.name,
      players: [],
      color: null
    };

    this.myFunc = this.myFunc.bind(this);
  }


  myFunc() {
    let players = [];
    axios.get(`https://stats.nba.com/stats/commonteamroster?LeagueID=&Season=2018-19&TeamID=${this.state.teamId}`)
      .then(res => {
        res.data.resultSets[0].rowSet.map(player => {
          players.push(Object.assign({}, { 'player': player[3], 'position': player[5], playerId: player[12] }))
          return players
        })
      })
      .then(() => this.setState(prevState => ({ ...prevState, players })))
  };


  render() {
    const color = (getMainColor(this.state.abbreviation).hex)
    const borderStyle = {
      borderBottom: `3px solid ${color}`
    };
    return (
      <div>
        <div onClick={this.myFunc} id={this.state.teamId} className="teams" style={borderStyle}>
          <img className="teamlogo" src={`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${this.state.abbreviation}.png`}></img>
          <p>{this.state.name}</p>
        </div>
        <div className="roster">
          {this.state.players.map(player => (
            <Players className='roster' key={Date.now() * Math.random()} color={color} teamId={this.state.teamId} player={player.player} playerId={player.playerId} position={player.position} />
          ))}
        </div>
      </div>
    );
  }
}

export default Teams;