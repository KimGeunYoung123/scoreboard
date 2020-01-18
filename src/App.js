import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from './components/Player';

class App extends React.Component{
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4}
    ]
  }

  handRemovePlayer = (id) => {
    console.log('handleRemove : ' + id);
    // 해당되는 id를 삭제
    this.setState(prevState => {
      const players = prevState.players.filter(item => item.id !== id);
      // es6 short hand property: 키와 값이 같으면 한쪽 생략
      //return { players: players}
      return { players}
    })
  }

  render() {
    return (
        <div className="scroeboard">
          <Header title="My Scoreboard" totalPlayers={11} />
          {
            //props.initialPlayers.map(item => <Player name={item.name} score={item.score} key={item.id.toString()} />)
            //props.initialPlayers.map(item => <Player name={item.name} key={item.id.toString()}/>)
            this.state.players.map(item => <Player name={item.name} key={item.id.toString()} removePlayer={this.handRemovePlayer} id={item.id} />)
          }
        </div>
    )
  }
}

export default App;
