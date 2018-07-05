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
      {rowState[j]? "O" : "X"}
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
        [false, true, false],
        [false, false, false],
        [false, false, false],
      ],
      player: null,
      win: null,
    };
  }

  onClickCell(x, y) {
    console.log("clicked", x, y);
  }

  render() {
    return (
      <div className="App">
        { row(3, 3, this.state.check, this.onClickCell) }
      </div>
    );
  }
}

export default App;