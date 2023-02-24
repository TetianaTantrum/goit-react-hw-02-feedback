import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class FeedbackCounter extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    total: 0,
    positiveFeedback: 'There is no feedback!',
  };
  state = { good: 0, neutral: 0, bad: 0 };

  handleIncrement = e => {
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = Math.round(
      (good * 100) / (good + neutral + bad)
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      handleIncrement,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default FeedbackCounter;
