import React, {Component} from 'react';
import InventoryButtons from '../../components/inventoryButtons/inventoryButtons.js'


class InvNavigation extends Component {

  state = {
    toggle: false
  }

  handleToggle = () => {
    let toggle = this.state.toggle
    this.setState({toggle: !toggle})
  }

  render() {
    const invNavStyle = {
      width: '100%',
      border: 'solid gainsboro 1px',
      paddingTop: '1%',
      paddingTop: '3%',
      paddingBottom: '3%'
    }

    return (
      <div className="container-fluid" style={invNavStyle}>
        <InventoryButtons
          toggle={this.state.toggle}
          handleToggle={this.handleToggle}
          changeView0={this.props.changeView0}
          changeView1={this.props.changeView1}
          changeView2={this.props.changeView2}/>
      </div>
    )
  }
}

export default InvNavigation;
