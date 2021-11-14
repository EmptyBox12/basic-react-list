/* eslint-disable no-useless-constructor */
import React from "react";

export class Edit extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const {submit , handleChange} = this.props;
    return (
      <div>
        <form onSubmit = {submit}>
          <input type="text" onChange = {handleChange} />
          <button type="submit">Click Me</button>
        </form>
      </div>
    );
  }
}