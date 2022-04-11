import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, title: "some", isDone: false },
        { id: 2, title: "some done", isDone: true },
      ],
    };
  }

  addTodo = (title) => {
    title &&
      this.setState({
        todos: [
          ...this.state.todos,
          { id: new Date().getTime(), title: title, isDone: false },
        ],
      });
  };

  clickHandleStatus = (id) => {
    const changedList = this.state.todos.map((item) => {
      return item.id === id ? { ...item, isDone: !item.isDone } : item;
    });

    this.setState({ todos: changedList });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h3>TODO List</h3>
        </div>
        <div className="container">
          <Form addTodo={this.addTodo} />

          <List
            todos={this.state.todos}
            clickHandleStatus={this.clickHandleStatus}
          />
        </div>
      </div>
    );
  }
}
