import React, { Component } from "react";

class AddTask extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("my-state", this.state);
  };
  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: 30 }}
          onSubmit={this.handleSubmit}
        >
          <legend>
            <h4>Add a new task</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter task name</label>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </>
    );
  }
}

export default AddTask;
