import React from "react";
import carte from "./fond_fr-all_svg.svg";
import './styles.css';

const map = () => {
  console.log(carte);
  return (
    <svg viewBox={carte.viewBox} className="pathClass" >

      {
        carte.locations.map((el) => (
          <path d={el.path} />
        ))
      }
    </svg>
  )
};



export default map