/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:19:15
 * @LastEditTime: 2019-08-12 16:01:31
 * @LastEditors: Please set LastEditors
 */

import React, { Component } from 'react';
import Toolbar from './Toolbar'
import PropTypes from 'prop-types'

class ContextDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 10,
      b: 20,
      c: 'test'
    }
  }
  getChildContext() {
    return {
      theme: 'dark'
    }
  }
  render() { 
    let {a, b, c} = this.state;
    return (
      <div>
          <Toolbar a={a} b={b} />
          {c}
          <button onClick={() => this.setState(state => state.c += 'x')}>change test</button>
          <button onClick={() => this.setState({a: ++a})} >add</button>
      </div>
    );
  }
}
ContextDemo.childContextTypes = {
  theme: PropTypes.string
}
 
export default ContextDemo;