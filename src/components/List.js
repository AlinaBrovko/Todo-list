import React, { Component } from "react";
import ListItem from "./ListItem";

export default class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className='list'>
        {todos.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            clickHandleStatus={this.props.clickHandleStatus}
          />
        ))}
      </div>
    );
  }
}
