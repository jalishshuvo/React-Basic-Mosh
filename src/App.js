import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Counters />
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Mounting Phase
  constructor() {
    super();
    console.log("App - Constructor");
    // this.state = this.props.something
  }

  componentDidMount() {
    // Ajax call
    console.log("App - Mounted");
    // this.setState({})
  }

  handleIncrement = (counter) => {
    const nCounters = [...this.state.counters];
    const index = nCounters.indexOf(counter);
    nCounters[index] = { ...counter };
    nCounters[index].value++;
    this.setState({ counters: nCounters });
    // console.log(counter);
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
    // console.log("Delete button clicked", counterId);
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ newCounters });
  };
  render() {
    console.log("App -rendered");
    return (
      <div className="App">
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
