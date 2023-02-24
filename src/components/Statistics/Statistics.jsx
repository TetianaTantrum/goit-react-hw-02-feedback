import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import {
  Options,
  OptionsList,
  Gradient,
  TotalItem,
} from '../Statistics/Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 ? (
        <Options>
          <OptionsList>
            <li>good: {good}</li>
            <li>neutral: {neutral}</li>
            <li>bad: {bad}</li>
          </OptionsList>
          <Gradient
            style={{
              background: `linear-gradient(to right, 
              #00f300 ${(good / total) * 100}%,
              #ffff39 ${(good / total) * 100}%,
              #ffff39 ${(neutral / total) * 100 + (good / total) * 100}%,
              #ff2300 ${(good / total) * 100 + (neutral / total) * 100}%`,
            }}
          />
          <TotalItem>Total: {total}</TotalItem>
          <li>Positive Feedback: {positivePercentage}%</li>
        </Options>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
