
import React, { Component } from 'react';

class ExampleClassComponent extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log('Component is mounted');
    // You can perform initial setup or data fetching here
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('Component is updated');
    // You can perform actions based on state/prop changes here
  }


  componentWillUnmount() {
    console.log('Component is about to unmount');
    // Cleanup tasks or subscriptions can be handled here
  }


  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Class-Based Component Example</h2>
        <p>Count: {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default ExampleClassComponent;
