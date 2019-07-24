import React, { Component } from 'react';
import { directive } from '@babel/types';
class Son extends Component {
  constructor(props) {
    super(props)
    this.state = {
      b: 'b'
    }
  }

  render() { 
    const { index, numberObject, handleClick } = this.props
    return ( <h1 onClick={ () => handleClick(index) }>{numberObject.number}</h1> );
  }
}

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      count: 0,
      numberArray: [
        {
          number: 0
        },
        {
          number: 1
        },
        {
          number: 2
        }
      ],
      loading: true
    }
  }
   async componentWillMount() {
    const loadData =  () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newNumberArray = this.state.numberArray.map(numberObje => {
            return {
              ...numberObje,
              number: numberObje.number * 2
            }
          })
          resolve(newNumberArray)
        }, 10000)
      })
    }
    const newArray = await loadData()
    console.log('father componentWillMount before loadData');
    this.setState({
      loading: false,
      numberArray: newArray
    });
  }

  handleClick(index) {
    let prevNumberArray = this.state.numberArray.map((obj, i) =>{
      return index === i ?
        {
          number: obj.number + 1
        }:
        obj
    })
    this.setState({
      numberArray: prevNumberArray
    })
  }
  handleCountClick() {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }
  renderSon () {
    return this.state.numberArray.map((number, key) => {
      return <Son key={key} index={key} numberObject={number} handleClick={this.handleClick.bind(this)}></Son>
    })
  }
  render() { 
    console.log('father render:')
    return ( 
      <div>
        { this.state.loading ? 
          <div>loading...</div> :
          this.renderSon()
        }
        <div
        onClick={this.handleCountClick.bind(this)}
        >
        {this.state.count}
        </div>
      </div>)
    ;
  }
}
 
export default Father;