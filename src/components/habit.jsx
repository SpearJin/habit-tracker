import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handlerIncrease = () => {
    this.props.onIncrease(this.props.habit);
  };

  handlerDecrease = () => {
    this.props.onDecrease(this.props.habit);
  };

  handlerDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handlerIncrease}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handlerDecrease}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handlerDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
