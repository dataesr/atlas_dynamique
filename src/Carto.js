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
  { key : "EC_COM", label: "Écoles de commerce" },
  { key : "EC_PARAM", label: "Écoles paramedicales et sociales" },
  { key : "EC_autres", label: "Autres écoles" },
  { key : "EC_ART", label: "Écoles supérieures d'art et de culture" },
  { key : "EC_JUR", label: "Écoles juridiques et administratives" },
  { key : "ENS", label: "Écoles normales supérieures - ENS" },
  { key : "EPEU", label: "Etablissements privés d'enseignement universitaire" },
  { key : "GE", label: "Grands établissements" },
  { key : "ING_autres", label: "Autres formations d'ingénieurs" },
  { key : "IUFM", label: "Institut national supérieir du professorat et de l'éducation - INSPE" },
  { key : "STS", label: "Section de techniciens supérieurs - STS" },
  { key : "IUT", label: "Instituts universitaires de technologie - IUT" },
  { key : "CPGE", label: "Classes préparatoires aux grandes écoles - CPGE" }
];

const year = [
  { key : "2021", label: "2021" },
  { key : "2020", label: "2020" },
  { key : "2019", label: "2019" },
  { key : "2018", label: "2018" },
  { key : "2017", label: "2017" },
  { key : "2016", label: "2016" },
  { key : "2015", label: "2015" },
  { key : "2014", label: "2014" },
  { key : "2013", label: "2013" },
  { key : "2012", label: "2012" },
  { key : "2011", label: "2011" },
  { key : "2010", label: "2010" },
  { key : "2009", label: "2009" },
  { key : "2008", label: "2008" },
  { key : "2007", label: "2007" },
  { key : "2006", label: "2006" },
  { key : "2005", label: "2005" },
  { key : "2004", label: "2004" },
  { key : "2003", label: "2003" },
  { key : "2002", label: "2002" },
  { key : "2001", label: "2001" },
];



function filteredData(data, type, year=2010) {
  let newData = []
  for(let i =0; i< data.length; i++){
    if(data[i].rgp3 === type && data[i].rentree === year){
      newData.push(data[i])
    }
  }
  return (newData)
}; 

export default function mamap() {
  const [type, setType] = useState(types[0].key);
  //const [year, setYear] = useState(year[0].key);
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
        data: filteredData(data,type, year),
  
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
      {/* <select value={year.key} onChange={event => setYear(event.target.value)} >
        {types.map((year) => <option key={year.key} value={year.key} > {year.label} </option>)}
      </select> */}
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
