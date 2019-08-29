/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-17 09:54:00
 * @LastEditTime: 2019-08-12 15:23:47
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: props.initCount
     }
  }
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
    return ( 
      <div>
        <p>你点了我{this.state.count}次</p>
        <button onClick={this.handleClick}>点我</button>
      </div>
     );
  }
}
 
export default Counter;