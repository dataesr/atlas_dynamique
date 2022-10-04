import React from "react";
import { ReactComponent as YourSvg } from './fond_fr-all_svg.svg';
import Highcharts from "highcharts";
//import { Svg, Polygon, Circle, G } from 'react-native-svg';
import './styles.css';


const map = () => {
  console.log(YourSvg );
  return (
    <div viewBox="0 0 100 100" className="pathClass" >
    <YourSvg />
    <points
      points="178244,6431704 70,80 25,95"
    />
  </div>
  )
};


export default map

 