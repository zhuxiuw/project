import React from 'react';
import "../css/app.css"

import Bar from "./bar.js"
import Middle_bar from "./middle_container.js"
import Trans from "./transportation.js"
import Pay from "./pay.js"

import photo from "../img/photo.jpg"
const name="luminous"
const money = ["175", "10", "200"]

export default function App() {
   return <>
   <Bar />
   <Middle_bar photo={photo} name={name}/>
   <Trans />
   <Pay money={money}/>
   </>
}






