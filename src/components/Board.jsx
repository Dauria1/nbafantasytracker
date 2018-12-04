import React, { Component } from 'react';
import teams from '../teams.json';
import Teams from './Teams'
import NBA from 'nba.js'
import PlayerContainer from './PlayerContainer'
import Players from './Players.jsx';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: null,
      teams: teams,
      players: [],

    }

  }
  
  
  render() {
    const { teams } = this.state;
    return (
      <div className="board">
          {teams.map(team => (
            <Teams className="franchises" key={Date.now() * Math.random()} players={team.players} teamId={team.teamId} abbreviation={team.abbreviation.toLowerCase()} name={team.teamName}  />
          ))}
        </div>
    );
  }

}

export default Board;