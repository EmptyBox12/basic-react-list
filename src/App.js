import React from "react";
import "./css/App.css";
import uniqid from "uniqid";
import { Overview } from "./components/Overview";
import { Edit } from "./components/Edit";

class App extends React.Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickDelete = this.clickDelete.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.state = {
      tasks: [],
      task: { text: "", id: uniqid() },
      taskIndex: 0,
      showEdit: false,
    };
  }
  submit(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  }
  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  }
  clickDelete(e) {
    this.setState({
      tasks: this.state.tasks.filter((item, index) => {
        if (index === parseInt(e.target.id)) {
          return false;
        } else {
          return true;
        }
      }),
      showEdit: false,
    });
  }
  clickEdit(e) {
    this.setState({
      showEdit: true,
      taskIndex: e.target.id,
    });
  }
  submitEdit(e) {
    e.preventDefault();
    let index = parseInt(this.state.taskIndex);
    let tasks = [...this.state.tasks];
    tasks[index].text = this.state.task.text;
    this.setState({ tasks, showEdit: false, task: { text: "" } });
  }

  render() {
    return (
      <div className= "container">
        <div className="content">
          <h1>To-Do List</h1>
          <form className="submitForm" onSubmit={this.submit}>
            <input
              onChange={this.handleChange}
              className="input"
              value={this.state.task.text}
              type="text"
            ></input>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
          <Overview
            tasks={this.state.tasks}
            deletion={this.clickDelete}
            clickEdit={this.clickEdit}
          />
          {this.state.showEdit ? (
            <Edit submit={this.submitEdit} handleChange={this.handleChange} />
          ) : (
            ""
          )}
        </div>
        <p className="footNote">Created by Ataberk Tümay</p>
      </div>
    );
  }
}

export default App;
