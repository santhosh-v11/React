import React, { Component } from "react";

class Hover extends Component{
    constructor(){
        super();
        
        this.state={
            con:"Hover Here"
        }
    }

    inc=()=>{
        this.setState({
            con:"Great! U did It!!"
        }) 
    }
    render(){
        return(
            
            <div>
                <h2>Change Content when Hover it</h2>
                <h3 onMouseOver={this.inc}>Hello User {this.state.con}!</h3>
            </div>
        )
    }
}

export default Hover;