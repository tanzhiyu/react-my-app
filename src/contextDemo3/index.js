/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 17:12:14
 * @LastEditTime: 2019-08-12 14:14:43
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Toolbar from './Toolbar'

// let ThemeContext = React.createContext('light');
// export {ThemeContext}
import {ThemeContext} from './theme-context'

class ContextDemo3 extends Component {
  render() { 
    return ( 
      <ThemeContext.Provider value="themdard">
        <Toolbar />
      </ThemeContext.Provider>
     );
  }
}

export default ContextDemo3;
export {ThemeContext}

