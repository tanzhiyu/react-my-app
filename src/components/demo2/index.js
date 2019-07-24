import React, { Component } from 'react';

export default class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      visable: true
    }
  }

  componentDidMount() {
    this.id = setInterval(() => {
      this.tick()
    }, 1000);
  }
  
  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState);
    return true;
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }


  handleClick = () => {
    this.setState({
      visable: !this.state.visable
    })
  }

  render () {
    return (
      <div>
        {this.state.visable && this.state.date.toLocaleString()}
        <button
          onClick={this.handleClick}
        >
          {this.state.visable ? 'hide' : 'show'}
        </button>
      </div>
    );
  }
}