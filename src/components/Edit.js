/* eslint-disable no-useless-constructor */
import React from "react";
import "../css/Edit.css";


export class Edit extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {submit , handleChange} = this.props;
    return (
      <div className = "editForm" >
        <form onSubmit = {submit}>
          <input className="input" type="text" onChange = {handleChange} />
          <button className="submitButton" type="submit">Submit Edit</button>
        </form>
      </div>
    );
  }
}