import React, {Component} from 'react';
import axios from 'axios';
import './ViewInventory.css';
import Navigation from '../Navigation/Navigation'

class ViewInventory extends Component {

  state = {
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

  render () {
    const inv = this.state.inventory.map(entry=>{
      return(
          <tr key={entry.location}>
            <td>{entry.location}</td>
            <td>{entry.pads}</td>
            <td>{entry.handTrucks}</td>
          </tr>
      )
    })
    const reservedInv = this.state.inventory.map(entry=>{
      return(
        <tr key={entry.location}>
          <td>{entry.location}</td>
          <td>{entry.padsReserved}</td>
          <td>{entry.handTrucksReserved}</td>
        </tr>
      )
    })

    const extraInv = this.state.inventory.map(entry=> {
      return (
        <tr key={entry.location}>
          <td>{entry.location}</td>
          <td>{entry.pads - entry.padsReserved}</td>
          <td>{entry.handTrucks - entry.handTrucksReserved}</td>
        </tr>
      )
    })

    return (
      <div className="card-body my-auto">
      <table className="table">
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
      <table className="table">
        <thead className="table-head">
          <tr>
            <th scope="col">Location</th>
            <th scope="col">Pads Reserved</th>
            <th scope="col">Hand Trucks Reserved</th>
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
      <table className="table">
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
      </div>
    )
  }
}

export default ViewInventory;
