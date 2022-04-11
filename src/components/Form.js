import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = { title: "" };
  }
  changeHandler = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler} className='add-list'>
        <input
          type="text"
          value={this.state.title}
          onChange={this.changeHandler}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}
