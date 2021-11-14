/* eslint-disable no-useless-constructor */
import React from "react";
import "../css/Overview.css";

export class Overview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tasks, deletion, clickEdit } = this.props;

    return (
      <ul className="list">
        {tasks.map((task, index) => {
          return (
            <div key={task.id}>
              <li className="listElement">
                {index + 1}. {task.text}
              </li>
              <div className= "buttonContainer">
                <button onClick={deletion} id={index}>
                  Delete
                </button>
                <button onClick={clickEdit} id={index}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}
