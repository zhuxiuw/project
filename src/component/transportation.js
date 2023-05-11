import React from 'react';
import "../css/app.css"
import one from "../img/one.png"
import two from "../img/two.png"
import three from "../img/three.png"
import four from "../img/four.png"



const items = [{id:1, name:"Back", src:one},  {id:2, name:"Visitor", src:two}, {id:3, name:"Summer", src:three }, {id:4, name:"Left school", src:four }]

export default function Trans(){
    const listItems = items.map(item =>
        <div>
            <div className="trans_icon">
                <img src={item.src} alt="icon"/>
            </div>
            <p>{item.name}</p>
        </div>
    );
   return (
    <div className='transportation'>
        <div className="transportation-content">
            <div className="content">
                {listItems}
            </div>
            <div >
                <button className='button-collapse'>
                    <p>Click to collapse </p>
                    <span className='arrow'></span>
                </button>
            </div>

        </div>
        
    </div>
   
    )
}









