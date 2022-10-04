import React, { useState, useEffect } from "react";
import Highcharts, { map } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import Map from "./FM_DOM_COML93.js";
import './styles.css';

highchartsMap(Highcharts); // Initialize the map module

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const MapOptions_metro = {
  title: {
    text: " "
  },
  credits: {
    enabled: false
  },
  mapNavigation: {
    enabled: false
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "lat: {Effectifs.y}, lon: {Effectifs.x}"
  },
  series:
  Map,   
};

const App = () => (
<HighchartsReact viewbox="0 0 1000 1000"
    highcharts={Highcharts}
    constructorType={"mapChart"}
    options={MapOptions_metro}
/>
        
  )
  
  export default App 