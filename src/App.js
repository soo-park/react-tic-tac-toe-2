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
      });
    }
  }

  render() {
    const { win, player, check } = this.state;
    const clickFunc = this.state.win === null ? this.onClickCell.bind(this) : () => console.log('game ended');
    const banner = win === null ? `${player}'s Turn`: `${win} Won`;

    return (
      <div className="App">
        <div className="board">
          { row(3, 3, check, clickFunc) }
        </div>
        <div className="banner">{ banner }</div>
      </div>
    );
  }
}

export default App;
