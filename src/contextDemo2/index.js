/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 17:03:00
 * @LastEditTime: 2019-08-09 17:10:27
 * @LastEditors: Please set LastEditors
 */
import React from 'react';

const ThemeContext = React.createContext('light');

const Toolbar = props => {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}
class ContextDemo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <ThemeContext.Provider value="22222222">
        <Toolbar />
      </ThemeContext.Provider>
     );
  }
}


class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render () {
    return (
      <div>ddd{this.context}</div>
    )
  }
}
 
export default ContextDemo2;