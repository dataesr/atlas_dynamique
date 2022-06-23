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


const staticOptions_reu = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_reu,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_may = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_may,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_guy = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_guy,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_mart = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_mart,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};
const staticOptions_guad = {
  title: {
    text: " ",
    useHTML: false
  },
  credits: {
    text: "",
    href: ""
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_guad,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 100
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_tahiti_moorea,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_uturoa = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 50
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_uturoa,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_futuna = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 80
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_futuna,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_wallis = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 60
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_wallis,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_nc = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 60
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_nc,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
        }
      }
    }
  ]
};

const staticOptions_st_martin = {
  title: {
    text: " ",
    useHTML: true
  },
  chart: {
    styledMode: true,
    width: 60
  },
  credits: {
    enabled: false
  },
  series: [
    {
      name: "Basemap",
      mapData: mapData_st_martin,
      borderColor: "#FFC3BA",
      borderWidth: 0.5,
      nullColor: "#FFEAE4",
      showInLegend: false,
      allowPointSelect: true,
      dataLabels: {
        enabled: false,
        format: "{point.name}",
        color: "#000"
      },
      states: {
        select: {
          borderColor: "#B5ACFF",
          color: "#7A77FF"
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

  const [options_reu, setOptions_reu] = useState({});
  useEffect(() => {
    setOptions_reu({
      ...staticOptions_reu,
      series: [
        {
          ...staticOptions_reu.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_may, setOptions_may] = useState({});
  useEffect(() => {
    setOptions_may({
      ...staticOptions_may,
      series: [
        {
          ...staticOptions_may.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_guy, setOptions_guy] = useState({});
  useEffect(() => {
    setOptions_guy({
      ...staticOptions_guy,
      series: [
        {
          ...staticOptions_guy.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_mart, setOptions_mart] = useState({});
  useEffect(() => {
    setOptions_mart({
      ...staticOptions_mart,
      series: [
        {
          ...staticOptions_mart.series[0],
          data: data
        }
      ]
    });
  }, [data]);
  const [options_guad, setOptions_guad] = useState({});
  useEffect(() => {
    setOptions_guad({
      ...staticOptions_guad,
      series: [
        {
          ...staticOptions_guad.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions({
      ...staticOptions,
      series: [
        {
          ...staticOptions.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_uturoa, setOptions_uturoa] = useState({});
  useEffect(() => {
    setOptions_uturoa({
      ...staticOptions_uturoa,
      series: [
        {
          ...staticOptions_uturoa.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_futuna, setOptions_futuna] = useState({});
  useEffect(() => {
    setOptions_futuna({
      ...staticOptions_futuna,
      series: [
        {
          ...staticOptions_futuna.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_wallis, setOptions_wallis] = useState({});
  useEffect(() => {
    setOptions_wallis({
      ...staticOptions_wallis,
      series: [
        {
          ...staticOptions_wallis.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_nc, setOptions_nc] = useState({});
  useEffect(() => {
    setOptions_nc({
      ...staticOptions_nc,
      series: [
        {
          ...staticOptions_nc.series[0],
          data: data
        }
      ]
    });
  }, [data]);

  const [options_st_martin, setOptions_st_martin] = useState({});
  useEffect(() => {
    setOptions_st_martin({
      ...staticOptions_st_martin,
      series: [
        {
          ...staticOptions_st_martin.series[0],
          data: data
        }
      ]
    });
  }, [data]);



  return (
    <Container>
      <Row>
        <Col md={6} className="Cadre">
          France metropolitaine
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"mapChart"}
            options={options_metro}
          />
        </Col>
        <Col md={6}>
          <Container fluid>
            <Row className="Cadre">
              Départements d'outre-mer
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_reu}
                  style={{ backgroundColor: "lightblue", height: "10px" }}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_guy}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_guad}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_may}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_mart}
                />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={12} className="Cadre">
          Collectivités d'outre-mer
          <Container fluid>
            <Row>
            <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_uturoa}
                />
            </Col>
            <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_futuna}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_wallis}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_nc}
                />
              </Col>
              <Col>
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={"mapChart"}
                  options={options_st_martin}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}