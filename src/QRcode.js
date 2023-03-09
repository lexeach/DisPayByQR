import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import QRCode from "react-qr-code";
import { QRCodeCanvas } from "qrcode.react";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { SwapWidget } from "@1inch/limit-order-protocol";

// import {setup1inchWidget} from '@1inch/embedded-widget';


function QR() {

  const [swapData, setSwapData] = useState(null);
  const [fromTokenAddress, setFromTokenAddress] = useState(null);
  const [toTokenAddress, setToTokenAddress] = useState(null);


const [ QR , setQR ] = useState("");
const [ connect , setConnect ] = useState("Connect wallet");
  
const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "BKsAeeC-F7GB6KBzySe_p5aOCRQ1ZH9l", // required
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "web3modal", // Required
        infuraId: "BKsAeeC-F7GB6KBzySe_p5aOCRQ1ZH9l", // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 97, // Optional. It defaults to 1 if not provided
        darkMode: false, // Optional. Use dark theme, defaults to false
      },
    },
    binancechainwallet: {
      package: true,
    },
  };
  
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions, // required
  });
  
  const connectWallet = async () => {
    // if (window.ethereum) {

      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        var accounts = await window.web3.eth.getAccounts();
    
        setConnect(accounts[0].slice(0,4) + "..." + accounts[0].slice(-2) );
        setQR("https://dispayment.netlify.app/?=ref"+ accounts[0])
      console.log(window.location.href.toString() + "?=ref"+ accounts[0]);
      // console.log("web3model hai ye " ,account);
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }


    
      
      
  };





  useEffect(()=>{

    connectWallet();

  }, [])




  return (
    <div style={{backgroundColor :"white"}} className="App">







<div className="main">
  {/* ***** Header Start ***** */}

  {/* ***** Header End ***** */}
  {/* ***** Hero Area Start ***** */}
 
  {/*====== Modal Search Area End ======*/}
  {/*====== Modal Responsive Menu Area Start ======*/}
  <div id="menu" className="modal fade p-0">
    <div className="modal-dialog dialog-animated">
      <div className="modal-content h-100">
        <div className="modal-header" data-dismiss="modal">
          Menu <i className="far fa-times-circle icon-close" />
        </div>
        <div className="menu modal-body">
          <div className="row w-100">
            <div className="items p-0 col-12 text-center" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <section className="staking-area" id="stake">


  <div style={{ height: "auto", margin: "0 auto", maxWidth: 500, width: "90%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={QR}
    viewBox={`0 0 256 256`}
    />




</div>

  
  </section>
  {/*====== Modal Responsive Menu Area End ======*/}
</div>


















    </div>
  );
}

export default QR;
