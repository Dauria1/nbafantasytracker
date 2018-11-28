import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NBA from 'nba';
import fetch from 'node-fetch';

class App extends Component {

  render() {

    let playersStats = [];
    fetch('https://stats.nba.com/stats/playerprofilev2?LeagueID=&PerMode=Totals&PlayerID=202681')
      .then(res => res.json())
      .then(res => console.log(res.resultSets[0].rowSet.filter(season => season[1] == '2018-19').map(stats => {
        playersStats.push(Object.assign({}, {
          'gamesPlayed': stats[6],
           'gamesStarted': stats[7], 
           'minutesPerGame': Math.round((stats[7] / stats[6]) * 100) / 100, 
           'fgmPerGame': Math.round((stats[9] / stats[6]) * 100) / 100, 
           'fgaPerGame': Math.round((stats[10] / stats[6]) * 100) / 100, 
           'fieldgoalPercent': stats[11], 
           'fg3mPerGame': Math.round((stats[12] / stats[6]) * 100) / 100, 
            'fg3aPerGame': Math.round((stats[13]/ stats[6]) * 100) / 100, 
            '3ptFGpercentage': stats[14], 
            'ftmPerGame': Math.round((stats[15]/ stats[6]) * 100) / 100, 
            'ftaPerGame': Math.round((stats[16]/ stats[6]) * 100) / 100, 
            'ftPercentage': stats[17], 
            'reboundsPerGame': Math.round((stats[20] / stats[6]) * 100) / 100, 
            'assistsPerGame': Math.round((stats[21] / stats[6]) * 100) / 100, 
            'stealsPerGame': Math.round((stats[22]/ stats[6]) * 100) / 100, 
            'blocksPerGame': Math.round((stats[22] / stats[6]) * 100) / 100, 
            'tosPerGame': Math.round((stats[24]/ stats[6]) * 100) / 100, 
            'pointsPerGame': Math.round((stats[26]/ stats[6]) * 100) / 100
        }))
      })));
console.log(playersStats)
    // Player Box Score for last 5 games
 
// console.log(NBA.findPlayer('Kyrie Irving'))
/* logs the follow
co sole.log(NBA.findPlayer('Jarrett Allen'))
co sole.log(NBA.findPlayer('Kemba Walker'))
co sole.log(NBA.findPlayer('Zach Lavine'))
co sole.log(NBA.findPlayer('Kevin Love'))
con ole.log(NBA.findPlayer('Dennis Smith Jr'))
con ole.log(NBA.findPlayer('Nikola Jokic'))
con ole.log(NBA.findPlayer('Blake Griffin'))
    console.log(NBA.findPlayer('Stephen Curry'))
console.log(NBA.findPlayer('Chris Paul'))
    console.log(NBA.findPlayer('Victor Oladipo'))
    console.log(NBA.findPlayer('Tobias Harris'))
    console.log(NBA.findPlayer('Lebron James'))
    console.log(NBA.findPlayer('Marc Gasol'))
    console.log(NBA.findPlayer('Goran Dragic'))
    console.log(NBA.findPlayer('Giannis Antetokounmpo'))
    console.log(NBA.findPlayer('Jimmy Butler'))
    console.log(NBA.fiing:
    {
      firstName: 'Stephen',
      lastName: 'Curry',
      playerId: 201939,
      teamId: 1610612744,
      fullName: 'Stephen Curry',
      downcaseName: 'stephen curry'
    }
    */
    // NBA.stats.playerProfile({ PlayerID: curry.playerId, GraphStat: "PTS" }).then(console.log);
    // NBA.stats.teamPlayerDashboard({ TeamID: curry.teamId, SeasonType: "regular"}).then(console.log);
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;