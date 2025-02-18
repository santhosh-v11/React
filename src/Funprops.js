import React from "react";

function Pro_ps(props){
    const styles={
        margin:"10px"
    }
    return(
        <div>
            <div className="nav">
                <ul className="list">
                    <li className="listitems"><a>Home</a></li>
                    <li className="listitems"><a>Services</a></li>
                    <li className="listitems"><a>Contact</a></li>
                    <li className="listitems"><a>About</a></li>
                </ul>
            <h2 style={styles}>Prop in Function Component</h2>
            <p style={{color: "yellow",background: "black"}}>Here {props.Topic} is used in {props.component}</p>

            </div>
        </div>
    )
}

export default Pro_ps;