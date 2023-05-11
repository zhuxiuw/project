import React from 'react';
import "../css/app.css"
import book from "../img/book.png"
import money from "../img/money.png"
import pay from "../img/pay.png"
import card from "../img/card.png"
import wallet from "../img/wallet.png"
import card_change from "../img/card-change.png"




const pays=[{name:"Ecard", src:card}, {name:"Subsidy", src:money}, {name:"Education", src:pay}, {name:"Book fee", src:book}]
const info_balance = [{id:0, balance:"Monthly Cost"}, {id:1, balance:"Monthly Recharge"}, {id:2, balance:"Account Balance"}]

function Pay_one(props){
    const listItems_one = info_balance.map(item =>
        <div>
            <span style={{fontSize:"1.5rem",fontFamily:"sans-serif",fontWeight:"500",color:"#654E92"}}>{props.money[item.id]} </span>
            <span style={{fontSize:"1rem",fontFamily:"sans-serif",fontWeight:"500"}}>yuan</span>
            <p style={{margin:0,fontSize:"0.8rem",fontFamily:"sans-serif",fontWeight:"500"}}>{item.balance}</p>
        </div>
    );
    return <div className= "pay" >{listItems_one}</div>
}

function Pay_two(){
    const listItems_two = pays.map(item =>
        <div><img src={item.src} alt="icon"/><p>{item.name}</p></div>
    );
    return <div className= "money" >{listItems_two}</div>

}

function Button(){
    return  <>
    <div className= "buttons">
        <button>
            <img src={card} alt="change"/>
            <span>Card Collection</span>
        </button>
        <button>
            <img src={card_change} alt="change"/>
            <span>Number Change</span>
        </button>
    </div>
    <button className='button-collapse'><p>click to collapse</p><span className='arrow'></span></button></>
    
}

export default function Pay(props){

   return (
   <div className="payment">
    <div>
        <img style={{width:"1.5rem",height:"auto"}} src={wallet} alt="wallet"/>
        <span>Card Wallet</span>
    </div>
    <Pay_one money={props.money}/>
    <Pay_two />
    <hr />
    <Button />
   
   </div>)
}