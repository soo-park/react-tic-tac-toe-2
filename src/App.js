import React, { Component } from 'react';
import './App.css';
import { checkWinner } from './helper';

const cell = (length, rowState, i, onClickCell) => [...Array(length).keys()].map((j) => {
  return (
    <div className="cell" id={j} key={j} onClick={() => onClickCell(i, j)}>
      {rowState[j] ? `${rowState[j]}` : ''}
    </div>
  )
});

const row = (x, y, checkState, onClickCell) => {
  return ([...Array(x).keys()].map((i) => <div className="row" id={i} key={i}> {
    cell(y, checkState[i], i, onClickCell)} </div>)
  )
};

class App extends Component {
  constructor(props) {
    super(props);
    const defaultState = {
      check: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      player: "X",
      win: null,
      click: 0,
    };
    this.state = defaultState;
  }

  onClickCell(x, y) {
    const { check, player } = this.state;
    if (check[x][y]) {
      console.log(x, y, " already clicked");
    } else {
      const newCheck = check;
      newCheck[x][y] = player === "X" ? "X" : "O";
      const newPlayer = player === "X" ? "O" : "X";
      this.setState({
        check: newCheck,
        player: newPlayer,
        win: checkWinner(newCheck, x, y, player),
        click: this.state.click + 1,
      });
    }
  }

  startNewGame() {
    console.log(this.defaultState)
    this.setState({
      check: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      player: "X",
      win: null,
      click: 0,
    })
  }

  render() {
    const { win, player, check, click } = this.state;
    const clickFunc = this.state.win === null ? this.onClickCell.bind(this) : () => console.log('game ended');
    let banner;
    if (click === 0 && win === null) {
      banner = "Game Start";
    } else if (click === 9 && win === null) {
      banner = "Game Over without a winner"
    } else if (win !== null) {
      banner = `${win} Won`;
    } else {
      banner = `${player}'s Turn`;
    }

    return (
      <div className="App">
        <div className="board" id={this.state.win}>
          { row(3, 3, check, clickFunc) }
        </div>
        <div className="banner">{ banner }</div>
        { this.state.win ? <button className="newbtn" onClick={this.startNewGame.bind(this)}>Start New Game</button> : null }
      </div>
    );
  }
}

export default App;
