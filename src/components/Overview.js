/* eslint-disable no-useless-constructor */
import React from "react";

export class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks , deletion, clickEdit} = this.props;

    return (
      <ul>
        {tasks.map((task, index) => {
          return (
            <div key = {task.id}>
              <li>
                {index + 1}. {task.text}
              </li>
              <button onClick = {deletion} id={index}>Delete</button>
              <button onClick = {clickEdit} id={index} >Edit</button>
            </div>
          );
        })}
      </ul>
    );
  }
}
