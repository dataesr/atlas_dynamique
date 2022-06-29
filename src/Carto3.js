import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { Col, Row, Container} from "react-bootstrap";
import proj4 from "proj4";
import mapData_metro from "./topo_dom";
import './styles.css';

highchartsMap(Highcharts); // Initialize the map module

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const MapOptions_metro = {
  chart: {
    map: "countries/fr/fr-all"
  },
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
    pointFormat: "lat: {point.lat}, lon: {point.lon}"
  },
  series: [
    {
      // Use the gb-all map with no data as a basemap
      name: "Basemap",
      mapData: mapData_metro,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Effectifs",
      color: "#4169E1",
      data: [{keyword:"Mahina",z:29.0,lat:-17.54,lon:-149.47},{keyword:"Noum\u00e9a",z:5152.0,lat:-22.26,lon:166.457},{keyword:"Amb\u00e9rieu-en-Bugey",z:147.0,lat:45.9608475114,lon:5.3729257777},{keyword:"Bellignat",z:103.0,lat:46.2373497134,lon:5.6360052884},{keyword:"Valserh\u00f4ne",z:35.0,lat:46.1067901755,lon:5.8320273646},{keyword:"Bourg-en-Bresse",z:2596.0,lat:46.2051520382,lon:5.246021255},{keyword:"Cayenne",z:4710.0,lat:5.0217374283,lon:-52.5012511113},{keyword:"Kourou",z:250.0,lat:4.9336067701,lon:-52.7663314416},{keyword:"Macouria",z:67.0,lat:4.9823846217,lon:-52.5084392425},{keyword:"Mana",z:57.0,lat:4.982857479,lon:-53.6480364932},{keyword:"Matoury",z:24.0,lat:4.8317935103,lon:-52.3435609813},{keyword:"Remire-Montjoly",z:121.0,lat:4.8843712859,lon:-52.2788402688},{keyword:"Saint-Laurent-du-Maroni",z:67.0,lat:4.9647439863,lon:-53.9832113662}],
      cursor: "pointer",
      point: {
        events: {
          click: function() {
            console.log(this.keyword);
          }
        }
      }
    }
  ]
};

const App = () => (

<HighchartsReact
    highcharts={Highcharts}
    constructorType={"mapChart"}
    options={MapOptions_metro}
/>

        
  )
  
  export default App 