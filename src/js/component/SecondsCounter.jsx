import React from "react";
import PropTypes from 'prop-types';

const SecondsCounter = (props) => {
  
    return (
        <div className="container_" >
            <div className="cube">
                <img src={props.url} alt="" width="70px" height="70px" />
            </div>
            <div className="cube">{props.num6}</div>
            <div className="cube">{props.num5}</div>
            <div className="cube">{props.num4}</div>
            <div className="cube">{props.num3}</div>
            <div className="cube">{props.num2}</div>
            <div className="cube">{props.num1}</div>
        </div>
    )
}

SecondsCounter.propTypes = {
  num1: PropTypes.number,
  num2: PropTypes.number,
  num3: PropTypes.number,
  num4: PropTypes.number,
  num5: PropTypes.number,
  num6: PropTypes.number,
  url: PropTypes.string
  
}

export default SecondsCounter;