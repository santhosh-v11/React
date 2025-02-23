import React, { useState } from 'react';

const Bk = () => {
    const[bg,setbg] = useState("cyan")
    const[prvbg,setprvbg] = useState('')
    const changebg=()=>{
        setprvbg(bg)
        setbg("lightgreen");
    }
    const undo=()=>{
        setbg(prvbg)
        
    }
    return (
        <div style={{background:bg, height:'100vh'}}>
            <h1 >Background Changer</h1>
            <button onClick={changebg} style={{margin:'1rem'}}>ChangeBackground</button>
            <button onClick={undo}>Undo</button>
        </div>
    );
};

export default Bk;