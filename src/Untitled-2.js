import React from "react";
import { ReactComponent as YourSvg } from './fond_fr-all_svg.svg';
import './styles.css';

const initialPoints = [
    { x: 80, y: 100 },
    { x: 45, y: 2.3 },
    { x: 250, y: 100 },
    { x: 250, y: 250 },
    { x: 100, y: 250 }
  ];
  
  const map = () => {
    console.log(YourSvg );
    return (
      <div viewBox="0 0 100 100" className="pathClass" >
      <YourSvg />
      <Polygon
        points="40,5 70,80 25,95"
        fill="lime"
        stroke="purple"
        strokeWidth="1"
        onPress={() => Alert.alert("tapped on the polygon")}
  />
    </div>
    )
  };
  
  
  
  export default map