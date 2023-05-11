import React from 'react';
import "../css/app.css"
import icon_bus from "../img/bar-icon1.png"
import icon_cal from "../img/bar-icon2.png"
import icon_map from "../img/bar-icon3.png"
import icon_mail from "../img/bar-icon4.png"



const items = [{id:1, name:"bus-time", src:icon_bus, className:'bar_icon1 iconbox'},  {id:2, name:"calender", src:icon_cal, className:'bar_icon2 iconbox'}, {id:3, name:"map", src:icon_map, className:'bar_icon3 iconbox'}, {id:4, name:"email", src:icon_mail, className:'bar_icon4 iconbox' }]

export default function Bar(props){
    const listItems = items.map(item =>
        <div>
            <div className={item.className}><img src={item.src} className="icon" alt="bar-icon"/></div>
            <p>{item.name}</p>
        </div>
    );
   return <div className="bar">{listItems}</div>
}







