import React from 'react';
import "../css/app.css"
import welcome from "../img/welcome.png"



export default function Middle_bar(props){
   return (
    <div className="middle-container">
        <div>
            <div className='photo-container'>
                <img className="photo" src={props.photo} alt="photo"/>
            </div>
        
            <div className="welcome">
                <p style={{fontSize:"1rem", margin:"0"}}>NYU student guide</p>
                <p style={{fontSize:"1.5rem",margin:"0", fontWeight:"bold"}}>Welcome，{props.name}</p>
            </div>
        </div>
        <img className="long-img" src={welcome} alt="photo"/>
    </div>
   
   )
}








