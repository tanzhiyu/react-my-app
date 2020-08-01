
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd'

const LifeCircle = Loadable({
  loader: () => import('./pages/LifeCircle'),
  loading: () => <Spin />
});

// import Counter from './Counter'
const Counter = Loadable({
  loader: () => import('./Counter'),
  loading: () => <Spin />
})

const AntDesign = Loadable({
  loader: () => import('./AntDesign'),
  loading: () => <Spin />
})


export default class App extends Component {
  render() {
    return (
       <Switch>
         <Route
            path="/home"
            render={props => <Counter {...props} />}
            >
          </Route>
          <Route 
            path="/ant-design"
            render={props => <AntDesign {...props} />}
          >
          </Route>
          <Route 
            path="/life-circle"
            render={props => <LifeCircle {...props}></LifeCircle>}
          />
          <Redirect to="/ant-design" />
       </Switch>
    );
  }
}