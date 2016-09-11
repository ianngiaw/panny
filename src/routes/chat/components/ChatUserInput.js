import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import uuid from 'uuid';
import classes from './ChatUserInput.scss';

import Pill from '../../../components/Pill';

export class ChatUserInput extends Component {
  static propTypes = {
    buttons: PropTypes.array,
    onPillPressed: PropTypes.func.isRequired
  }

  render() {
    const { buttons, onPillPressed } = this.props;

    const buttonActionGenerator = value => () => onPillPressed(value);

    return (
      <Row className={classes.content}>
        {this._renderUserInput(buttons, buttonActionGenerator)}
      </Row>
    );
  }

  _renderUserInput(buttons, buttonActionGenerator) {
    return buttons.map(button => (
      <Pill key={uuid.v4()} onClick={buttonActionGenerator(button.value)}>{button.label}</Pill>
    ));
  }
}

export default ChatUserInput;
