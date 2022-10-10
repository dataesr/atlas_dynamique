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

const types = [
  { key : "UNIV", label: "Universités" },
  { key : "EC_COM", label: "Ecoles de commerce" }
];



function filteredData(data, type) {
  let newData = []
  for(let i =0; i< data.length; i++){
    if(data[i].rgp3 === type){
      newData.push(data[i])
    }
  }
  return (newData)
}; 

export default function mamap() {
  const [type, setType] = useState(types[0].key)
  console.log(type)

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
      pointFormat: "{this.rgp3}"
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
        //data,
        data: filteredData(data,type),
  
        cursor: "pointer",
        point: {
          events: {
            click: function () {
              console.log(this.rgp3);
            }
          }
        }
      }
    ]
  };

  return (
    <>
      <select value={type.key} onChange={event => setType(event.target.value)} >
        {types.map((type) => <option key={type.key} value={type.key} > {type.label} </option>)}
      </select>
      <div className="row" viewbox="0 0 100 100">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={staticOptions}
        />
      </div>
    </>
  );
}
