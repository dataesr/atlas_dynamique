import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapData from "./FM_DOM_COML93";
import data from "./atlas_uu_l93.js";
import { Dropdown } from "semantic-ui-react";
import divStyle from './styles.css';

highchartsMap(Highcharts);

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const actions = [
  { value: "STS", label: "STS - Section de Technicien Supérieur" },
  { value: "IUT", label: "IUT - Institut Universitaire de Technologie" },
  { value: "UNIV", label: "Universités" }
];

console.log(typeof mapDataIE);
console.log(Object.getPrototypeOf(mapData) === Map.prototype);

const staticOptions = {
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
      mapData: mapData,
      borderColor: "#A0A0A0",
      nullColor: "rgba(200, 200, 200, 0.3)",
      showInLegend: false
    },
    {
      // Specify points using lat/lon
      type: "mapbubble",
      name: "Locations",
      color: "#4169E1",
      data,
      
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


/*
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
*/

export default function mamap () {
  return (
    <>
      <div className="row" style= {divStyle}>
      <dropdown/>
    </div><div className="row">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={staticOptions} />
      </div></>
  );
//}

}