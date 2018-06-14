import React from 'react'
import MediaQuery from 'react-responsive'
import {Spring, Transition} from 'react-spring'
const componentDown  = styles => <i className="fas fa-chevron-down" style={{...styles, position: 'relative', zIndex: '5'}}></i>;
const componentUp = styles => <i className="fas fa-chevron-up" style={{...styles, position: 'relative', zIndex: '2'}}></i>

const InventoryButtons = (props) => {

  const inventoryButtonStyle = {
    border: 'solid black 1px',
    borderRadius: '2.5%',
    marginTop: '1vh',
    marginBottom: '1vh',
    background: '#3a4'
  }

  const invBtnDivStyle = {
    paddingTop: '3%',
    paddingBottom: '2%',
    color: 'white'
  }
  let toggle = props.toggle

  return(

    <div className='row'>
      <MediaQuery maxWidth={767}>
        <Spring
          from={{
            opacity: '0',
            height: 0,
            fontSize: '0em',

          }}
          to={{
            opacity: toggle ? '1' : '0',
            height: toggle ? 'auto' : 0,
            fontSize: toggle ? '1em' : '0em',

          }}>
          {styles =>{
            return (
              <div className="col-12" style={styles}>
                <div className="col-12 col-md-4" style={inventoryButtonStyle}>
                  <div
                    className="btn btn-small col-12 col-md-8"
                    style={invBtnDivStyle}
                    onClick={props.changeView0}
                  ><h6>Available</h6></div>
                </div>
                <div className="col-12 col-md-4" style={inventoryButtonStyle}>
                  <div
                    className="col-12 col-md-8"
                    style={invBtnDivStyle}
                    onClick={props.changeView1}
                  ><h6>Reserved</h6></div>
                </div>
                <div className="col-12 col-md-4" style={{...inventoryButtonStyle, marginBottom: '2vh'}}>
                  <div
                    className="col-12 col-md-8"
                    style={invBtnDivStyle}
                    onClick={props.changeView2}
                  ><h6>Extra</h6></div>
                </div>
              </div>
            )}
          }
        </Spring>
        <div className="col-12" style={{color:"gainsboro", position: 'relative'}} onClick={props.handleToggle}>
          <Transition from={{opacity:0, rotation: '0deg'}} enter={{opacity:1, rotation: '90deg'}} leave={{opacity: 0, rotation: '0deg'}}>
            {toggle ? componentUp : componentDown}
          </Transition>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="col-12 col-md-4" style={invBtnDivStyle}>
          <button
            className="btn btn-small btn-success col-12 col-md-8"
            onClick={props.changeView0}
          >Available</button>
        </div>
        <div className="col-12 col-md-4" style={invBtnDivStyle}>
          <button
            className="btn btn-small btn-success col-12 col-md-8"
            onClick={props.changeView1}
          >Reserved</button>
        </div>
        <div className="col-12 col-md-4" style={invBtnDivStyle}>
          <button
            className="btn btn-small btn-success col-12 col-md-8"
            onClick={props.changeView2}
          >Extra</button>
        </div>
      </MediaQuery>

    </div>
  )
}

export default InventoryButtons
