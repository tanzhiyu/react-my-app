/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 17:14:14
 * @LastEditTime: 2019-08-12 15:27:06
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

import {ThemeContext} from './theme-context'
// import {ThemeContext} from './index.js'

class ThemedButton extends Component {
  static contextType = ThemeContext;
  render() { 
    return ( 
      <button onClick={() => console.log(this.context)}>context Demo</button>
     );
  }
}

 
export default ThemedButton;