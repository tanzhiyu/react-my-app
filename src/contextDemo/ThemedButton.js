/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 15:23:43
 * @LastEditTime: 2019-08-12 17:36:25
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import {ThemeContext} from './index'

class ThemedButton extends Component {
  render() { 
    return ( 
      <button>themeButton</button>
     );
  }
}

ThemedButton.contextTypes = {
  theme: PropTypes.string
} ;
 
export default ThemedButton;