import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

import Web3 from "web3";


import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

function App() {

const navigate = useNavigate();
const [ usdt , setUsdt ] = useState("");
const [ tokenprice , setTokenPrice ] = useState("");
const [ tokenForSend , settokenForSend ] = useState("");
 const [tosend , settosend] = useState("");
const [ connect , setConnect ] = useState("Connect wallet");
const [inputValue, setInputValue] = React.useState("");




function handleInputChange(event) {
  console.log( "refffffff" ,window.location.href);
    setInputValue(event.target.value);
    console.log((event.target.value * usdt) / tokenprice);
    settokenForSend(((event.target.value * usdt) / tokenprice).toFixed(4));
    
}

function handleInputChangeC(event) {
 
    console.log(event.target.value );
  if(event.target.value == "USD"){
      fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
      console.log( 1 /res.rates.USD); 
      // console.log(res.rates.EUR);
      setUsdt(1 / res.rates.USD);

    }
      )
  }

  if(event.target.value == "EUR"){
    fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
    console.log( 1 /res.rates.EUR); 
    // console.log(res.rates.EUR);
    setUsdt(1 / res.rates.EUR);

  }
    )
}

   
if(event.target.value == "JPY"){
  fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
  console.log( 1 /res.rates.JPY); 
  // console.log(res.rates.EUR);
  setUsdt(1 / res.rates.JPY);

}
  )
}

   

if(event.target.value == "CNY"){
  fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
  console.log( 1 /res.rates.CNY); 
  // console.log(res.rates.EUR);
  setUsdt(1 / res.rates.CNY);

}
  )
}

if(event.target.value == "AUD"){
  fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
  console.log( 1 /res.rates.AUD); 
  // console.log(res.rates.EUR);
  setUsdt(1 / res.rates.AUD);

}
  )
}

if(event.target.value == "CAD"){
  fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
  console.log( 1 /res.rates.CAD); 
  // console.log(res.rates.EUR);
  setUsdt(1 / res.rates.CAD);

}
  )
}

   
  }

  useEffect(()=>{

    var referrer = window.location.href.toString(); 
    if(!localStorage.getItem("referal") && referrer.length > 65){
    settosend(referrer.substr(-42, 43))
    }
    connectWallet();
    tokenVal();
   
     fetch('https://api.exchangerate.host/latest?base=USDT').then(res => res.json()).then(res => {
      console.log( 1 /res.rates.INR); 
      // console.log(res.rates.EUR);
      setUsdt(1 / res.rates.INR);

  })

  }, [])





const connectWallet = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    var accounts = await window.web3.eth.getAccounts();

    setConnect(accounts[0].slice(0,4) + "..." + accounts[0].slice(-2) )
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};



  const tokenVal = async () => {
    // const provider = await web3Modal.connect();
    // 
    // await window.ethereum.send("eth_requestAccounts");
    // const accounts = await web3.eth.getAccounts();
    // const account = accounts[0];

    // await provider.enable();

    //  Create Web3 instance
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();
  
    var abi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"address","name":"stableCoin_","type":"address"},{"internalType":"address payable","name":"_swapAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_newSwap","type":"address"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"ChangeSwapAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referral","type":"address"},{"indexed":true,"internalType":"uint256","name":"_level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"LevelsIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":true,"internalType":"address","name":"_referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_time","type":"uint256"},{"indexed":false,"internalType":"string","name":"tokenType","type":"string"}],"name":"SponsorIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"now","type":"uint256"}],"name":"TopUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"WithdrawROI","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Registration","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_newSwap","type":"address"}],"name":"changeSwapAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"currUserID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentTokenAccepting","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freezeTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"gettrxBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"level_income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ownerWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRegStableCoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"stableCoin","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"topUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalFreeze","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"referredUsers","type":"uint256"},{"internalType":"uint256","name":"income","type":"uint256"},{"internalType":"uint256","name":"levelIncomeReceived","type":"uint256"},{"internalType":"uint256","name":"stakedToken","type":"uint256"},{"internalType":"uint256","name":"stakeTimes","type":"uint256"},{"internalType":"uint256","name":"withdrawable","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawROI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"withdrawableROI","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

    var contractaddress = '0x2F7dEaefdb7Ab44b51dd9C0870e164bc46c85FC3';

   

    const instance = new web3.eth.Contract(abi, contractaddress);

    var totaluser =  await instance.methods.tokenPrice().call();
    console.log(web3.utils.fromWei( totaluser , "ether"));

    setTokenPrice(web3.utils.fromWei( totaluser , "ether"))
    
    


    
     
  };




  const pay = async () => {
   
    const web3 = window.web3;
    const webeProvider = new Web3(Web3.givenProvider);
    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_unfreezer","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"UnfreezePercent","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_frozenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"freezeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"owners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFreezeToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"unfreezePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unfreezeToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

    var contractaddress = '0xC9409Af02e2D9b654154FD3596cfaAc4E50512a9';

   

    const instance = new web3.eth.Contract(abi, contractaddress);

    console.log( tosend ,  web3.utils.toWei( tokenForSend , "ether"));
    await instance.methods.transfer(tosend , 10000 ).send({ from : accounts[0]});
    
    
    


    
     
  };


  return (
    <div className="App">







<div className="main">
  {/* ***** Header Start ***** */}
  <header id="header">
    {/* Navbar */}
    <nav data-aos="zoom-out" data-aos-delay={800} className="navbar gameon-navbar navbar-expand">
      <div className="container header">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src="/img/logo/logo.png" alt="Brand Logo" />
        </a>
        <div className="ml-auto" />
        {/* Navbar Nav */}
       
       
        {/* Navbar Icons */}
        {/* Navbar Toggler */}
        {/* <ul className="navbar-nav toggle">
          <li className="nav-item">
            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
              <i className="icon-menu m-0" />
            </a> 
           </li>
        </ul> */}
        {/* Navbar Action Button */}

        <ul className="navbar-nav action">


<li className="nav-item ml-2">
  {/* <a style={} href='https://metamask.app.link/dapp/' >go to mobile</a> */}
  <a  onClick={()=> navigate('/QR')} href="#" className="btn ml-lg-auto btn-bordered-white"><i  />Receive DIS </a>
</li>
</ul>
        <ul className="navbar-nav action">


          <li className="nav-item ml-2">
            {/* <a style={} href='https://metamask.app.link/dapp/' >go to mobile</a> */}
            <a onClick={connectWallet} href="#" className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />{connect}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  {/* ***** Header End ***** */}
  {/* ***** Hero Area Start ***** */}
  <section className="hero-section">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-9 text-center">
          {/* Hero Content */}
          <div className="hero-content">
            <div className="intro text-center mb-5">
              <h1 style={{color: 'blue'}}> DISCOUNT COIN  </h1>
              <h3 className="mt-4">Rule The World</h3>
            </div>
            {/* Buttons */}
            <div className="button-group">
              <a className="btn btn-bordered active smooth-anchor" href="https://discountcoin.netlify.app/"><i className="icon-rocket mr-2" />Know about DIS</a>
              <a className="btn btn-bordered-white" href="https://bscscan.com/address/0xf250a59723cfb438645772203BA262E52DE5Cd13"><i className="icon-note mr-2" />DIS Contract</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ***** Hero Area End ***** */}
  {/* ***** Staking Area Start ***** */}
  <section className="staking-area" id="stake">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="card no-hover staking-card single-staking">
            <h3 className="m-0">Pay With  DIS Token </h3>
           
            <div className="tab-content mt-md-3" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one-tab">
                <div className="staking-tab-content">
                  {/* Info Box */}
                  <div className="info-box d-flex justify-content-between">
                  
                  
                  </div>


                  <div className="input-box my-4">
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                  <input  value={tosend} type="text" placeholder="wallet Address" />
                  {/* <a href="#">Max</a> */}
                </div>
                {/* <a href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Approve</a> */}
              </div>
              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">
                  <input  value={tokenForSend} disabled type="text" placeholder="DIS" />
                  {/* <a href="#">Max</a> */}
                </div>
                {/* <a href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Approve</a> */}
              </div>

              <div className="input-area d-flex flex-column flex-md-row mb-3">
                <div className="input-text">

              <select onChange={handleInputChangeC} style={{border :"2px solid white" , borderRadius :"8px"}} id="list" onchange="getSelectValue();">
            <option  value="INR">INR</option>
            <option  value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option> 
            <option value="CNY">CNY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
           
        </select>

        </div>
                {/* <a href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">Approve</a> */}
              </div>

              <div className="input-area d-flex flex-column flex-md-row">
                <div className="input-text">
                  <input value={ inputValue }  onChange={handleInputChange } type="number" placeholder="INR" />
                  {/* <a href="#">Max</a> */}
                </div>
                <a onClick={pay} href="#" className="btn input-btn mt-2 mt-md-0 ml-md-3">PAY</a>
              </div>
            </div>
                </div>
              </div>
              
            
            </div>
          
            <span>Pay With Token</span>
            {/* <span>Referral Commision upto 6%</span> */}
          </div>
        </div>
        
      </div>
    </div>
  </section>

</div>


















    </div>
  );
}

export default App;
