//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
let url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfsqQulHvKNTM0q8R6gU7Y_AFt5_TrkS5WA&usqp=CAU";
let counter = 0;
setInterval(function () {
    const n6 = Math.floor((counter / 100000) % 10);
    const n5 = Math.floor((counter / 10000) % 10);
    const n4 = Math.floor((counter / 1000) % 10);
    const n3 = Math.floor((counter / 100) % 10);
    const n2 = Math.floor((counter / 10) % 10);
    const n1 = Math.floor((counter / 1) % 10);

    //render your react application
    counter++;


    //render your react application
    ReactDOM.render(<SecondsCounter url={url} num1={n1} num2={n2} num3={n3} num4={n4} num5={n5} num6={n6} />, document.querySelector("#app"))
}, 1000)
