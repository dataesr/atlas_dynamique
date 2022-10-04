import React from "react";
import { ReactComponent as YourSvg } from './FM_DOM_COM93.geojson';
import Highcharts from "highcharts";
//import { Svg, Polygon, Circle, G } from 'react-native-svg';
import './styles.css';


const map = () => {
  console.log(YourSvg );
  return (
    <div viewBox="0 0 100 100" className="pathClass" >
    <YourSvg />
    <points
      points="183353.663110989436973, 6432946.077621255069971 70,80 25,95"
    />
  </div>
  )
};


export default map