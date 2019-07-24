import React from 'react'
function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={(e) => this.props.onClick(i, e)}
      />
    );
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    }
  }

  jumpTo(index) {
  }
  handleClick (i, e) {
    console.log(i);
    console.log(e)
    const current = this.state.history[this.state.history.length - 1].squares
    const winner = calculateWinner(current)
    if (winner || current[i]) {
      return; 
    }
    const squares = current.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: this.state.history.concat([{squares}]),
      xIsNext: !this.state.xIsNext
    })
  }
  render() {
    const current = this.state.history[this.state.history.length - 1].squares
    let status;
    const winner = calculateWinner(current)
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    const moves = this.state.history.map((step, index) => {
      const desc = index ?
        'Go to move ' + index
        : 'Go game start'
      
      return (
        <li key={index}>
          <button onClick={()=> this.jumpTo(index)}>
            {desc}
          </button>
        </li>
      )

    })
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current} xIsNext={this.state.xIsNext} onClick={(i, e) => {this.handleClick(i, e)}}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game


