import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handlerIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handlerDecrease = () => {
    const count = this.state.count;
    this.setState({ count: count <= 0 ? 0 : this.state.count - 1 });
  };

  handlerDelete = () => {};

  render() {
    return (
      <div className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
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
      </div>
    );
  }
}

export default Habit;
