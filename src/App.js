import React, { Component } from 'react';
import './App.css';
import { checkWinner } from './helper';

const cell = (length, rowState, i, onClickCell) => [...Array(length).keys()].map((j) => {
  return (
    <span key={j} onClick={() => onClickCell(i, j)}>
      {rowState[j]? `[${rowState[j]}]` : '[ ]'}
    </span>
  )
});


const row = (x, y, checkState, onClickCell) => {
  return ([...Array(x).keys()].map((i) => <div id={i} key={i}> {
    cell(y, checkState[i], i, onClickCell)} </div>)
  )
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      player: "A",
      win: null,
    };
  }

  onClickCell(x, y) {
    const { check, player } = this.state;
    if (check[x][y]) {
      console.log(x, y, " already clicked");
    } else {
      const newCheck = check;
      newCheck[x][y] = player === "A" ? "A" : "B";
      const newPlayer = player === "A" ? "B" : "A";
      this.setState({
        check: newCheck,
        player: newPlayer,
        win: checkWinner(newCheck, x, y, player),
      });
    }
  }

  render() {
    const { win, player, check } = this.state;
    return (
      <div className="App">
        { row(3, 3, check, this.onClickCell.bind(this)) }
        <div>{ win !== 'null' ? `${player}'s Turn`: `${player} Won`}</div>
      </div>
    );
  }
}

export default App;
