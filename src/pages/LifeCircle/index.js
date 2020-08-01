import React, { Component } from 'react';
import './index.scss';
import { Spin } from 'antd';

const someState = {}
class LifeCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 30
    }
  }

  handleAdd = (e) => {
    this.setState(someState);
  }


  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ', nextProps);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentupdate: ', nextProps === this.props, nextState === this.state);
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ', prevState);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="life-circle">
        <div>
          <span>{count}</span>
          <button className="add" onClick={this.handleAdd}>增加</button>
        </div>
        <A />
        <B />
        <C/>
      </div>
    );
  }
}


class A extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('A-componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('A-shouldComponentUpdate: ', nextProps, nextState);
    return true;
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('A-componentWillReceiveProps: ', nextProps === this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('A-componentDidUpdate: ', prevState);
  }
  render() {
    return <div className="component-a">
      A
    </div>;
  }
}


class B extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('B-componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('B-shouldComponentUpdate: ', nextProps, nextState);
    return true;
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('B-componentWillReceiveProps: ', nextProps === this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('B-componentDidUpdate: ', prevState);
  }
  render() {
    return <div className="component-a">
      B
    </div>;
  }
}


class C extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('C-componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('C-shouldComponentUpdate: ', nextProps, nextState);
    return true;
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('C-componentWillReceiveProps: ', nextProps === this.props)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('C-componentDidUpdate: ', prevState);
  }
  render() {
    return <div className="component-a">
      <D></D>
      <E></E>
    </div>;
  }
}



class D extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('D-componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('D-shouldComponentUpdate: ', nextProps, nextState);
    return true;
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('D-componentWillReceiveProps: ', nextProps === this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('D-componentDidUpdate: ', prevState);
  }
  render() {
    return <div className="component-a">
      D
    </div>;
  }
}


class E extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('E-componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('E-shouldComponentUpdate: ', nextProps, nextState);
    return true;
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log('E-componentWillReceiveProps: ', nextProps === this.props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('E-componentDidUpdate: ', prevState);
  }
  render() {
    return <div className="component-a">
      E
    </div>;
  }
}









export default LifeCircle;