import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './Carto';

class DropdownClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Tous'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Type d'établissements : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Type d'établissements :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="UNIV">Universités</option>
            <option value="STS">STS - Section de Technicien Supérieur</option>
            <option value="IUT">IUT - Institut Universitaire de Technologie</option>
            <option value="CPGE">CPGE - Classes Préparatoires aux Grandes Ecoles</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <DropdownClass/>
    <App />
  </React.StrictMode>
);
