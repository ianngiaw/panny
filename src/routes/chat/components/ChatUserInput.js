import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import uuid from 'uuid';
import classes from './ChatUserInput.scss';

import Pill from '../../../components/Pill';

export class ChatUserInput extends Component {
  static propTypes = {
    buttons: PropTypes.array
  }

  render() {
    const { buttons } = this.props;

    return (
      <Row className={classes.content}>
        {this._renderUserInput(buttons)}
      </Row>
    );
  }

  _renderUserInput(buttons) {
    return buttons.map(button => (
      <Pill key={uuid.v4()}>{button}</Pill>
    ));
  }
}

export default ChatUserInput;

