import React, { Component, PropTypes } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import uuid from 'uuid';
import classes from './ChatItems.scss';

export class ChatItems extends Component {
  static propTypes = {
    chatItems: PropTypes.array.isRequired
  }

  render() {
    const { chatItems } = this.props;
    return (
      <Row className={classes.content}>
        {this._renderChatItems(chatItems)}
      </Row>
    );
  }

  _renderChatItems(items) {
    return items.map(this._renderChatItem);
  }

  _renderChatItem(item) {
    /*
    switch (item.type) {
      case 'CurrentFlightCard':
        // const data = item.data
        // return <CurrentFlightCard {...data} />
        break;
      default:
        return <Col key={uuid.v4()}>Item</Col>;
    }
    */
    return <Col key={uuid.v4()}>{item}</Col>;
  }
}

export default ChatItems;

