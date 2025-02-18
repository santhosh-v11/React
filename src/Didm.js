import React, { Component } from 'react'

export default class Didm extends Component {
    constructor(){
        super()
        this.state = {con:"Hello!!"}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ con: "Welcome !!" });
        }, 3000);
    }



  render() {
    return (
      <div>
        <h1>Look Here and Wait 3sec  {this.state.con}</h1>
      </div>
    )
  }
}
