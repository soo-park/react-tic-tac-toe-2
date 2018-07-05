import React, { Component } from 'react';
import './App.css';

const cell = (length, rowState, i, onClickCell) => [...Array(length).keys()].map((j) => {
  function onClick(i, j) {
    onClickCell(i, j);
  }

  return (
    <span
      key={j}
      onClick={() => onClick(i, j)}
    >
      {rowState[j]? `[${rowState[j]}]` : '[ ]'}
    </span>
  )
});


const row = (x, y, checkState, onClickCell) => {
  return ([...Array(x).keys()].map((i) => <div id={i} key={i}> {cell(y, checkState[i], i, onClickCell)} </div>))
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
    if (this.state.check[x][y]) {
      console.log(x, y, " already clicked");
    } else {
      const newCheck = this.state.check;
      newCheck[x][y] = this.state.player === "A" ? "A" : "B";
      const newPlayer = this.state.player === "A" ? "B" : "A";
      this.setState({
        check: newCheck,
        player: newPlayer,
      });
    }
  }

  render() {
    return (
      <div className="App">
        { row(3, 3, this.state.check, this.onClickCell.bind(this)) }
      </div>
    );
  }
}

export default App;
