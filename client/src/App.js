import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Inventory from './containers/Inventory/Inventory';
import ViewInventory from './containers/ViewInventory/ViewInventory';
import Navigation from './containers/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    apiTest: ""
  }

  componentDidMount() {
    this.testApi();
  }

  testApi = () => {
    axios.get('/api/test')
      .then(response => {
        const apiTest = response.data;
        this.setState({apiTest})
      });
  }
  render() {
    const appStyle = {
      fontFamily: "'Roboto', sans-serif"
    }
    const titleStyle = {
      fontFamily: "'Russo One', sans-serif"
    }
    return (
      <div className="App container-fluid justify-content-center" style={appStyle}>
        <div className="row justify-content-center title-div">
          <h3 className="title" style={titleStyle}>Pad Tracker</h3>
        </div>
        <Router>
          <div className="col-md-8 mx-auto px-0">
            <div className="card">
              <Navigation />
              <Switch>
                <Route exact path="/" component={Inventory}/>
                <Route exact path="/view" component={ViewInventory}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
