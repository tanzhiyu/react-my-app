import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    console.log('Counter Constructor')
    super(props);
    this.state = { 
      count: props.initCount
     }
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('getDerivedStateFromProps', props, state);
  //   if (props.initCount !== state.count) {
  //     return {
  //       count: props.initCount
  //     }
  //   }
  //   return null;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentupdate', nextProps, nextState, this.props, this.state);
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate', prevProps, prevState, this.props, this.state);
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() { 
    console.log('Counter Render', this.state);
    return ( 
      <div>
        <p>你点了我{this.state.count}次</p>
        <button onClick={this.handleClick}>点我</button>
      </div>
     );
  }
}
 
export default Counter;