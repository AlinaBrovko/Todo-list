import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div
        className={`item-list ${item.isDone ? "item-done" : ""}`}
        onClick={() => this.props.clickHandleStatus(item.id)}
      >
        {item.title}
      </div>
    );
  }
}
