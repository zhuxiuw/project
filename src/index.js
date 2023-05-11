import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/app.css"

import Bar from "./component/bar.js"
import Middle_bar from "./component/middle_container.js"
import Trans from "./component/transportation.js"
import Pay from "./component/pay.js"

import photo from "./img/photo.jpg"
const name="luminous"
const money = ["175", "10", "200"]

function App() {
   return <>
   <Bar />
   <Middle_bar photo={photo} name={name}/>
   <Trans />
   <Pay money={money}/>
   </>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);




