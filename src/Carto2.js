import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { Col, Row } from "react-bootstrap";
import proj4 from "proj4";
import mapData from "./FM_DOM_COML93";
import data from "./atlas_uu_l93.js";
import dataTousAnnees from "./atlas_uu_l93_type.js";
import dataTousTypes from "./atlas_uu_l93_an.js";
import dataTous from "./atlas_uu_l93_tous.js";
import StepRangeSlider from "react-step-range-slider";

highchartsMap(Highcharts);

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const types = [
  { key: "TOUS_Types_Annees", label: "Tous les types d'enseignement supérieur depuis 2001" },
  { key: "TOUS", label: "Tous les types d'enseignement supérieur par an" },
  { key: "UNIV", label: "Universités" },
  { key: "EC_COM", label: "Écoles de commerce" },
  { key: "EC_PARAM", label: "Écoles paramedicales et sociales" },
  { key: "EC_autres", label: "Autres écoles" },
  { key: "EC_ART", label: "Écoles supérieures d'art et de culture" },
  { key: "EC_JUR", label: "Écoles juridiques et administratives" },
  { key: "ENS", label: "Écoles normales supérieures - ENS" },
  { key: "EPEU", label: "Etablissements privés d'enseignement universitaire" },
  { key: "GE", label: "Grands établissements" },
  { key: "ING_autres", label: "Autres formations d'ingénieurs" },
  { key: "IUFM",label:"Institut universitaire de formation des maîtres - IUFM"},
  { key: "STS", label: "Section de techniciens supérieurs - STS" },
  { key: "INP", label: "Instituts nationaux polytechniques - INP" },
  { key: "CPGE", label: "Classes préparatoires aux grandes écoles - CPGE" }
];

const years = [
  {value: 2001,step: 1},
  {value: 2002,step: 1},
  {value: 2003,step: 1},
  {value: 2004,step: 1},
  {value: 2005,step: 1},
  {value: 2006,step: 1},
  {value: 2007,step: 1},
  {value: 2008,step: 1},
  {value: 2009,step: 1},
  {value: 2010,step: 1},
  {value: 2011,step: 1},
  {value: 2012,step: 1},
  {value: 2013,step: 1},
  {value: 2014,step: 1},
  {value: 2015,step: 1},
  {value: 2016,step: 1},
  {value: 2017,step: 1},
  {value: 2018,step: 1},
  {value: 2019,step: 1},
  {value: 2020}
];

function filteredData(data, dataTousTypes, dataTous, year, type) {
  let newData = [];
  if (type === 'TOUS') {
    for (let i = 0; i < dataTousTypes.length; i++) {
      if (dataTousTypes[i].rentree === `${year}`) {
        newData.push(dataTousTypes[i]);
      }
    }
    return newData;
  }/*
   else if (year === "2000") {
    for (let i = 0; i < dataTousAnnees.length; i++) {
      if (dataTousAnnees[i].rgp3 === type) {
        newData.push(dataTousAnnees[i]);
      }
    }
    return newData;
  } */
  else if (type === "TOUS_Types_Annees") {
    return dataTous;
  }  
  else { 
    for (let i = 0; i < data.length; i++) {
      if ((data[i].rgp3 === type) && (data[i].rentree === `${year}`)) {
        newData.push(data[i]);
      }
    }
    return newData;
  } 
}


export default function mamap() {
  const [type, setType] = useState(types[15].key);

  const [year, setYear] = useState(years[0].value);

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
      pointFormat: `type d'enseignement: {this.rgp3}`
    },
    series: [
      {
        name: "Basemap",
        mapData,
        borderColor: "#A0A0A0",
        nullColor: "rgba(200, 200, 200, 0.3)",
        showInLegend: false
      },
      {
        type: "mapbubble",
        name: "Locations",
        color: "#4169E1",
        data: filteredData(data, dataTousTypes, dataTous, year, type),

        cursor: "pointer",
        point: {
          events: {
            click: function () {
              console.log(this.z);
            }
          }
        }
      }
    ]
  };
  console.log(staticOptions);
  

  return (
    <>
    <Row>
      <Col md={3}>
      <select
        value={type.key}
        onChange={(event) => setType(event.target.value)}
      >
        {types.map((type) => (
          <option key={type.key} value={type.key}>
            {" "}
            {type.label}{" "}
          </option>
        ))}
      </select>
      <div className="App" style={{ padding: 50 }}>
      <StepRangeSlider
        value={year}
        range={years}
        onChange={(value) => setYear(value)}
      />
      </div>
      </Col>
      <Col md={9}>
      <div className="row" >
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={staticOptions}
        />
      </div>
      </Col>
      </Row>
    </>
  );
}
