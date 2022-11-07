import React, { useState } from "react";
import { useValue } from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { Col, Row } from "react-bootstrap";
import proj4 from "proj4";
import mapData from "./FM_DOM_COML93";
import data from "./atlas_uu_l93.js";
import { Box, Slider, Typography } from '@mui/material';
import StepRangeSlider from "react-step-range-slider";
import {RangeStepInput} from 'react-range-step-input';
import "./styles.css"

highchartsMap(Highcharts);

if (typeof window !== "undefined") {
  window.proj4 = window.proj4 || proj4;
}

const types = [
  //{ key: "TOUS", label: "Tous les types d'enseignement supérieur" },
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
  {key: "IUFM",label:"Institut universitaire de formation des maîtres - IUFM"},
  { key: "STS", label: "Section de techniciens supérieurs - STS" },
  { key: "INP", label: "Instituts nationaux polytechniques - INP" },
  { key: "CPGE", label: "Classes préparatoires aux grandes écoles - CPGE" }
];

const years = [
  {value: 2001,label: "2001"},
  {value: 2002,label: "2002"},
  {value: 2003,label: "2003"},
  {value: 2004,label: "2004"},
  {value: 2005,label: "2005"},
  {value: 2006,label: "2006"},
  {value: 2007,label: "2007"},
  {value: 2008,label: "2008"},
  {value: 2009,label: "2009"},
  {value: 2010,label: "2010"},
  {value: 2011,label: "2011"},
  {value: 2012,label: "2012"},
  {value: 2013,label: "2013"},
  {value: 2014,label: "2014"},
  {value: 2015,label: "2015"},
  {value: 2016,label: "2016"},
  {value: 2017,label: "2017"},
  {value: 2018,label: "2018"},
  {value: 2019,label: "2019"},
  {value: 2020,label: "2020"}
];

const SliderBar = () => {
  const {
    state: { year },
    dispatch,
  } = useValue();
  return (
    <Box sx={{ mt: 5 }}>
      <Typography>Année: { year }</Typography>
      <Slider
        min={0}
        max={19}
        defaultValue={19}
        valueLabelDisplay="auto"
        marks={years}
        value={year}
        onChange={(e, price) =>
          dispatch({ type: 'FILTER_PRICE', payload: price })
        }
      />
    </Box>
  );
};

function filteredData(data, year, type) {
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i].rgp3 === type) && (data[i].rentree === `${year}`)) {
      newData.push(data[i]);
    }
  }
  return newData;
}


export default function Mamap() {
  const [type, setType] = useState(types[0].key);

  //const [year, setYear] = useState(years[0].value);
  

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
  console.log(staticOptions);
  

  return (
    <>
    <Row>
      <Col lg ={3}>
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
      <div>
      <SliderBar />
      </div>
      </Col>
      <Col lg ={7}>
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
};


