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
  onClick = e => {
    const { value } = e.target.attributes.option;
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
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onClick}
          ></FeedbackOption>
        </Section>
        <Statistics></Statistics>
      </div>
    );
  }
}
export default App;
