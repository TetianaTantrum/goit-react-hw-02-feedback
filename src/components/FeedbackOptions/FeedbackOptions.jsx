import React from 'react';
import { ButtonList, Button } from './FeedbackOptions.styled';
import {
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSunglasses,
} from 'react-icons/bs';

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
          {(() => {
            console.log(option);
            switch (option) {
              case 'good':
                return <BsEmojiHeartEyes />;
              case 'neutral':
                return <BsEmojiNeutral />;
              case 'bad':
                return <BsEmojiFrown />;
              default:
                return <BsEmojiSunglasses />;
            }
          })()}
        </Button>
      </li>
    ))}
  </ButtonList>
);

export default FeedbackOptions;
