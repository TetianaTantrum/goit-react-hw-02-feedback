import React from 'react';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map(option => (
      <li key={option}>
        <Button
          type="button"
          label={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      </li>
    ))}
  </ButtonList>
);

export default FeedbackOptions;

// linear-gradient(to right,
//   green 0%,
//   green ${(good / total) * 100}%,
//   yellow ${(good / total) * 100}%,
//   yellow ${(neutral / total) * 100 + (good / total) * 100}%,
//   red ${
//     (good / total) * 100+
//     (neutral / total) * 100
//
//   }%,
//   red 100%)
