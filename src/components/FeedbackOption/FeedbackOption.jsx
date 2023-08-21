import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOption.stiled';

const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <Item>
            <Button onClick={onLeaveFeedback}>{option}</Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOption.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
