import './App.css'
import MainPage from './Component/MainPage';
import SecondFile from './Component/SecondFile';
import ThirdFile from './Component/ThirdFile';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState, useEffect } from "react";
// import App from './App';

console.log(window.innerWidth);


export default function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [num, setNum] = useState(1024)
  const [secondnum, setSecondnum] = useState(720)


  function desktopcomp() {
    return (
      <>
        <MainPage />
      </>
    )
  }

  function mobilecomp() {
    return (
      <>
        <SecondFile />
      </>
    )
  }

  function tabcomp() {
    return (
      <>
        <ThirdFile />
      </>
    )
  }

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])



  return (
    <div>
      <ul>

        {screenSize.width > num ? screenSize.width > num ? desktopcomp() : mobilecomp() : screenSize.width > secondnum ? mobilecomp() : tabcomp()}


        {/* {screenSize.width > num ? desktopcomp() : mobilecomp()} */}
        {/* {screenSize.width > num ? mobilecomp() : tabcomp()} */}
        {/* {desktopcomp() === screenSize.width > num ? desktopcomp() : mobilecomp() === screenSize.width > num ? mobilecomp() : tabcomp()} */}
        {/* {desktopcomp() === true ? desktopcomp() : mobilecomp() === true ? mobilecomp() : tabcomp()} */}
        {/* a === true ? a : b === true ? b : c */}

      </ul>

    </div>
  )
}


