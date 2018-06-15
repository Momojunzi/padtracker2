import React from 'react';
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <div>
      <form className="row justify-content-around" id="myForm">
        <div className="form-group col-11 text-left">
          <label for="location">Location</label>
          <input className="form-control" id="location" placeholder="ex. 0522-10" onChange={props.changeHandler}/>
        </div>
        <div className="form-group col-11 text-left">
          <label for="pads">Available pads in doz</label>
          <input className="form-control" id="pads" placeholder="ex. 10 doz" onChange={props.changeHandler}/>
        </div>
        <div className="form-group col-11 text-left">
          <label for="padsReserved">Reserved pads through Sunday</label>
          <input className="form-control" id="padsReserved" placeholder="ex. 10 doz" onChange={props.changeHandler}/>
        </div>
        <div className="form-group col-11 text-left">
          <label for="handTrucks">Available hand trucks</label>
          <input className="form-control" id="handTrucks" placeholder="ex. 10" onChange={props.changeHandler}/>
        </div>
        <div className="form-group col-11 text-left">
          <label for="handTrucksReserved">Reserved hand trucks through Sunday</label>
          <input className="form-control" id="handTrucksReserved" placeholder="ex. 10" onChange={props.changeHandler}/>
        </div>
      </form>
      <div className="coll-12 form-btn">
        <button className="btn btn-lg btn-success col-6 col-md-4" onClick={props.clickHandler}>Submit</button>
      </div>
    </div>
  )
}

export default InputForm;
