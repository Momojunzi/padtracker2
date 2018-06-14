import React, {Component} from 'react';
import axios from 'axios';
import './ViewInventory.css';
import Navigation from '../Navigation/Navigation'
import InvNavigation from '../inventoryNavigation/inventoryNavigation.js'

class ViewInventory extends Component {

  state = {
    view: 0,
    inventory:[],
    pads: 0,
    ht: 0,
    resPads: 0,
    resHt: 0
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios.get("/api/getInventory")
      .then(result => {
        this.setState({inventory: result.data}, ()=>{this.totalAcc()})
      })
  }

  totalAcc = () => {
    const pads = this.state.inventory.map(entry=>{
      return entry.pads;
    }).reduce((start, entry)=>{
      return start+entry;
    })
    const resPads = this.state.inventory.map(entry=>{
      return entry.padsReserved;
    }).reduce((start, entry)=>{
      return start+entry;
    })
    const ht = this.state.inventory.map(entry =>{
      return entry.handTrucks;
    }).reduce((start, entry)=>{
      return start+entry;
    })
    const resHt = this.state.inventory.map(entry =>{
      return entry.handTrucksReserved;
    }).reduce((start, entry)=>{
      return start+entry;
    })
    this.setState({pads, ht, resPads, resHt});
  }

  changeView0 = ()=>{
    const view = 0
    this.setState({view})
  }

  changeView1 = ()=>{
    const view = 1
    this.setState({view})
  }

  changeView2 = ()=>{
    const view = 2
    this.setState({view})
  }

  setView = () => {
    const inv = this.state.inventory.map(entry=>{
      return(
          <tr key={entry.location}>
            <td style={{width: '33.33%'}}>{entry.location}</td>
            <td style={{width: '33.33%'}}>{entry.pads}</td>
            <td style={{width: '33.33%'}}>{entry.handTrucks}</td>
          </tr>
      )
    })
    const reservedInv = this.state.inventory.map(entry=>{
      return(
        <tr key={entry.location}>
          <td style={{width: '33.33%'}}>{entry.location}</td>
          <td style={{width: '33.33%'}}>{entry.padsReserved}</td>
          <td style={{width: '33.33%'}}>{entry.handTrucksReserved}</td>
        </tr>
      )
    })

    const extraInv = this.state.inventory.map(entry=> {
      return (
        <tr key={entry.location}>
          <td style={{width: '33.33%'}}>{entry.location}</td>
          <td style={{width: '33.33%'}}>{entry.pads - entry.padsReserved}</td>
          <td style={{width: '33.33%'}}>{entry.handTrucks - entry.handTrucksReserved}</td>
        </tr>
      )
    })
    let view = this.state.view
    if(view === 0) {
      return (
        <table className="table table-striped table-bordered" style={{}}>
          <thead className="table-head">
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Pads</th>
              <th scope="col">Hand Trucks</th>
            </tr>
          </thead>
          <tbody>
            {inv}
            <tr>
              <td>District Total</td>
              <td>{this.state.pads}</td>
              <td>{this.state.ht}</td>
            </tr>
          </tbody>
        </table>
      )
    }
    else if(view === 1) {
      return (
        <table className="table table-striped table-bordered" style={{}}>
          <thead className="table-head">
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Pads Resv.</th>
              <th scope="col">Hand Trucks Resv.</th>
            </tr>
          </thead>
          <tbody>
            {reservedInv}
            <tr>
              <td>District Total</td>
              <td>{this.state.resPads}</td>
              <td>{this.state.resHt}</td>
            </tr>
          </tbody>
        </table>
      )
    }
    else if(view === 2) {
      return (
        <table className="table table-striped table-bordered" style={{}}>
          <thead className="table-head">
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Extra Pads</th>
              <th scope="col">Extra Hand Trucks</th>
            </tr>
          </thead>
          <tbody>
            {extraInv}
            <tr>
              <td>District Total</td>
              <td>{this.state.pads - this.state.resPads}</td>
              <td>{this.state.ht - this.state.resHt}</td>
            </tr>
          </tbody>
        </table>
      )
    }
  }

  render () {
    return (
      <div className="card-body my-auto">
      <InvNavigation
        changeView0={this.changeView0}
        changeView1={this.changeView1}
        changeView2={this.changeView2}
      />
      <div className='row' style={{marginTop: '4vh'}}>
        {this.setView()}
      </div>
      </div>
    )
  }
}

export default ViewInventory;
