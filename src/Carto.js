import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { Col, Row } from "react-bootstrap";
import proj4 from "proj4";
import mapData from "./FM_DOM_COML93";
import data from "./atlas_uu_l93.js";
import StepRangeSlider from "react-step-range-slider";

highchartsMap(Highcharts);

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const types = [
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
  {
    key: "IUFM",
    label:
      "Institut national supérieir du professorat et de l'éducation - INSPE"
  },
  { key: "STS", label: "Section de techniciens supérieurs - STS" },
  { key: "IUT", label: "Instituts universitaires de technologie - IUT" },
  { key: "CPGE", label: "Classes préparatoires aux grandes écoles - CPGE" }
];

const range = [
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

function filteredData(data, year, type) {
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i].rgp3 === type) && (data[i].rentree === `${year}`)) {
      newData.push(data[i]);
    }
  }
  return newData;
}


export default function mamap() {
  const [type, setType] = useState(types[0].key);

  const [year, setYear] = useState(range[19].value);

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
      pointFormat: "type d'enseignement: {this.rgp3}"
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
        data: filteredData(data, year, type),

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
        range={range}
        onChange={(value) => setYear(value)}
      />
      </div>
      </Col>
      <Col md={9}>
      <div className="row" viewbox="0 0 100 100">
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
