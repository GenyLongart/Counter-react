import React from "react";
//import PropTypes from 'prop-types';
const SecondsCounter = (props) => {
  let seconds = 0;
  let interval = null;

  function timer (){
    seconds++

    //Formateando el tiempo

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
   
   if(secs < 10) secs = '0' + secs;
   if(mins < 10) mins = '0' + mins;
   if(hrs < 10) hrs = '0' + hrs;

    let str = hrs + ':' + mins + ':' + secs;

    return str;
  }

  function start() {
    interval = setInterval(timer, 1000);
  }
  

   

    return (
        <div className="container_" width={props.width} height={props.height}>
            <h1 onLoad={start()}>{timer()}</h1>
        </div>
    )
}



export default SecondsCounter;