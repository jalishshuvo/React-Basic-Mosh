import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
    console.log("Delete button clicked", counterId);
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// 1. Creating first React Component : Counter
// 2. EMBEDING EXPRESSION
// 3. SETTING ATTRIBUTES : attibuse of an image
// 4. STYLING STYLES
// 5. RENDERING CLASSES DYNAMICLY
// 6. RENDERING LIST :
// map method use korle key dite hobe

// 7. CONDITIONAL RENDERING
// 8. HANDLING EVENTS : 1:02
// 9. BINDING ENVEN HANDLERS:
// using constructor to bind handle increment
// arrow function => instead of constructor

// 10.UPDATING THE STATE
// 11. WHAT HAPPENS WHEN STATE CHANGES
// 12. PASSING EVENT ARGUMENTS

// PART- 2 COMPOSING COMPONENT
// 13. PASSING DATA TO COMPONENTS
// 14. PASSIGN CHILDREN
// 15. DEBUGGING REACT APP
// 15. PROPS VS STATE
// PROPS :
// include data that we give to component
// read only

// STATE : include data local or private to that component

// 16. RAISING AND HANDLING EVENTS:
// The components that own the piece of state should be the one modifying it
// Counter Child Component => raising an event onDelete through props
// Counters Parent Component => handling an event handleDelete

// 17. UPDATING STATE FOR handleDelete
