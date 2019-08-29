/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-27 11:21:28
 * @LastEditTime: 2019-08-19 09:51:18
 * @LastEditors: Please set LastEditors
 */

import React, { Component } from 'react';
import { Button,
   Divider
  } from 'antd';
// import LoginForm from './form'
import CanvasCircl from './canvas'
import Example from './Hooks'
import Counter from './Counter'
import SnapshotSample from './snapshotExample'
// import EchartDemo from './echarts'
// import EchartFirstEmpty from './echarts/empty'
import ContextDemo from './contextDemo';
import ContextDemo2 from './contextDemo2'
import ContextDemo3 from './contextDemo3'
import CallbackForm from './useCallbackForm'
import TextInputWithFocusButton from './useRef'
import MemoComponents from './Memo'
import TreeSelect from './treeSelect'

export default class App extends Component {
  state = {
    showExample: true,
    initCount: 10,
    obj: {
      a: 2
    }
  };

  render() {
    const obj = {a: 2}
    return (
        <div style={{width: 1200, margin: '10px auto'}}>
          {/* <LoginForm></LoginForm> */}
          <Divider />
          {this.state.showExample && <Example initCount={this.state.initCount} />}
          <Divider />
          <Counter   initCount={this.state.initCount}/>
          <Button onClick={() => this.setState(prevState => ({initCount: prevState.initCount + 10}))}>改变initCount</Button>
          <Divider />
          <SnapshotSample />
          <Divider />
          {/* <EchartDemo /> */}
          <Divider />
          {/* <EchartFirstEmpty /> */}
          <Divider />
          <CanvasCircl />
          <Divider />
          <ContextDemo />
          <Divider />
          <ContextDemo2 />
          <Divider />
          <ContextDemo3 />
          <Divider />
          <CallbackForm />
          <Divider />
          <TextInputWithFocusButton />
          <Divider />
          <MemoComponents count={obj} />
          <Divider />
          <TreeSelect />
        </div>
    );
  }
}