import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOption from './FeedbackOption/FeedbackOption';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // handleIncrement = () => {this.setState(prevState => {
  //   value: prevState.value + 1;
  // });}
  // handleDecrement = () => {this.setState(prevState => {
  //   value: prevState.value - 1;
  // });}

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback"></Section>
      </div>
    );
  }
}
export default App;
