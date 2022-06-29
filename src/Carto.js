import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { Col, Row, Container} from "react-bootstrap";
import proj4 from "proj4";
import mapData_metro from "./topo_fm";
import mapData_reu from "./topo_reu";
import mapData_may from "./topo_may";
import mapData_guy from "./topo_guy";
import mapData_mart from "./topo_mart";
import mapData_guad from "./topo_guad";
import mapData_tahiti_moorea from "./topo_tahiti_moorea";
import mapData_uturoa from "./topo_uturoa";
import mapData_futuna from "./topo_futuna";
import mapData_wallis from "./topo_wallis";
import mapData_nc from "./topo_nc";
import mapData_st_martin from "./topo_st_martin";
import data from "./data2"
import './styles.css';

highchartsMap(Highcharts);

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}


console.log(typeof mapDataIE);
console.log(Object.getPrototypeOf(mapData_metro) === Map.prototype);

const staticOptions_metro = {
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
      name: "Locations",
      color: "#4169E1",
      data: [{keyword:"Amb\u00e9rieu-en-Bugey",z:147.0,lat:45.9608475114,lon:5.3729257777},{keyword:"Bellignat",z:103.0,lat:46.2373497134,lon:5.6360052884},{keyword:"Valserh\u00f4ne",z:35.0,lat:46.1067901755,lon:5.8320273646},{keyword:"Bourg-en-Bresse",z:2596.0,lat:46.2051520382,lon:5.246021255},{keyword:"Cayenne",z:4710.0,lat:5.0217374283,lon:-52.5012511113},{keyword:"Kourou",z:250.0,lat:4.9336067701,lon:-52.7663314416},{keyword:"Macouria",z:67.0,lat:4.9823846217,lon:-52.5084392425},{keyword:"Mana",z:57.0,lat:4.982857479,lon:-53.6480364932},{keyword:"Matoury",z:24.0,lat:4.8317935103,lon:-52.3435609813},{keyword:"Remire-Montjoly",z:121.0,lat:4.8843712859,lon:-52.2788402688},{keyword:"Saint-Laurent-du-Maroni",z:67.0,lat:4.9647439863,lon:-53.9832113662}],
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



export default ({ data }) => {
  const [options_metro, setOptions_metro] = useState({});
  useEffect(() => {
    setOptions_metro({
      ...staticOptions_metro,
      series: [
        {
          ...staticOptions_metro.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  return (
    
<HighchartsReact
  highcharts={Highcharts}
  constructorType={"mapChart"}
  options={options_metro}
/>

  );
}