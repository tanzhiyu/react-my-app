import React, { Component } from 'react'

export default (WrappedComponent, name) => {

  class NewComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: ''
      }
    }
    componentWillMount() {
      let data = localStorage.getItem(name) || '无'
      this.setState({
        data
      })
    }
    render () {
      return <WrappedComponent data={this.state.data}></WrappedComponent>
    }
  }
  return NewComponent
}