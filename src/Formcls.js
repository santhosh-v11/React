
import './form.css'
import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state={
            Name:"",
            num:"",
            email:"",
            role:""

        }
    }
    handleName=(event)=>{
        this.setState({
            Name:event.target.value
        })
    }
    handleNum=(event)=>{
        this.setState({
            num:event.target.value
        })
    }
    mail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    role=(event)=>{
        this.setState({
            role:event.target.value
        })
    }
    submit=(event)=>{
        event.preventDefault();
        alert(` name:${this.state.Name} role:${this.state.role} mailid:${this.state.email}`)
    }
  render() {
    return (
        <form onSubmit={this.submit}>
            <h1>Fill this form to apply</h1>
            <div id='name'>
            <label>Name:</label>
            <input type="text" value={this.state.Name} onChange={this.handleName} />
            </div>
            <div>
                <label >Mobile No:</label>
                <input type="number" value={this.state.num} onChange={this.handleNum}></input>
            </div>
            <div>   
                <label>emailid:</label>
                <input type="email" value={this.state.email} onChange={this.mail} />
            </div>
            <div>
                <label>Resume:</label>
                <input type="file"  />
            </div>
            <div>
                <label >Role:</label>
                <select value={this.state.role} onChange={this.role}>
                    <option >Frontend </option>
                    <option >Java Backend</option>
                    <option >Python Backend</option>
                    <option >Node.js Backend</option>
                    <option >Database Management</option>
                    <option >Associate</option>
                </select>
            </div>
            <input type="submit" />
        </form>
    )
  }
}

export default Form
