import React, { Component } from 'react';
import Players from './Players'


class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {},
      fantasy: null,
      playerGameLog: [],
    }

  }

  componentDidMount() {
    const playerGameLog = [];
    fetch(`https://stats.nba.com/stats/playergamelog?DateFrom=&DateTo=&LeagueID=00&PlayerID=${this.props.playerId}&Season=2018-19&SeasonType=Regular%20Season`)
      .then(res => res.json())
      .then(res => {
        res.resultSets[0].rowSet.slice(0, 5).map(game => playerGameLog.push(Object.assign({},
          {
            'gameId': game[2], 'gameDate': game[3], 'matchup': game[4], 'wl': game[5],
            'fgm': game[7], 'fga': game[8], 'ftm': game[13], 'fta': game[14],
            'minutesPlayed': game[6], 'rebounds': game[18], 'assists': game[19],
            'steals': game[20], 'blocks': game[21], 'turnovers': game[22],
            'points': game[24],
            'fantasyPoints': game[7] - game[8] + game[13] - game[14] + game[18] + game[19] + game[20] + game[21] - game[22] + game[24]
          })));
      })
    this.state.playerGameLog = playerGameLog
    console.log(this.state.playerGameLog);
  }

  render() {
    if (this.props.stats.length === 1) {
      this.stats = this.props.stats;
      this.state.fantasy =
        Math.round(((this.props.stats[0].stl) +
          (this.props.stats[0].fgm) -
          (this.props.stats[0].fga) +
          (this.props.stats[0].ftm) -
          (this.props.stats[0].fta) +
          (this.props.stats[0].reb) +
          (this.props.stats[0].ast) +
          (this.props.stats[0].blk) -
          (this.props.stats[0].tov) +
          (this.props.stats[0].pts)
          * 100 / 100));
    } else {
      console.log('not there')
      this.state.stats = {};
    }


    return (
      <div className="statTable">
        <table>
          <th className="playerName">{this.props.player}</th>
          <img className="playerImage" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/${this.props.teamId}/2018/260x190/${this.props.playerId}.png`} alt="" />
          <tr>
            <th>Pts</th>
            <th>Assists</th>
            <th>Blocks</th>
            <th>Steals</th>
            <th>Fantasy Points</th>
          </tr>
          <tr>
            {this.props.stats.length >= 1 &&
              <td>{this.props.stats[0].pts}</td>
            }
            {this.props.stats.length >= 1 &&
              <td>{this.props.stats[0].reb}</td>
            }
            {this.props.stats.length >= 1 &&
              <td>{this.props.stats[0].ast}</td>
            }
            {this.props.stats.length >= 1 &&
              <td>{this.props.stats[0].blk}</td>
            }
            {this.props.stats.length >= 1 &&
              <td>{this.state.fantasy}</td>
            }
          </tr>
          <div class="divider"><p>Last 5 Games</p></div>
          <tr>
            {this.props.stats.length >= 1 &&
              this.state.playerGameLog.map(game => (
                <tr>testststts</tr>
              ))}
          </tr>
        </table>
      </div>
    );
  }
};


export default PlayerContainer;