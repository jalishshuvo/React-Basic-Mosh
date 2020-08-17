import React, { Component } from "react"; //imrc

// cc
class Counter extends Component {
  state = {
    count: this.props.value,
  };

  handleIncrement = (product) => {
    this.setState({ count: (this.state.count += 1) });
  };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        {/* <h1> counter {this.props.id} </h1> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    return this.state.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
