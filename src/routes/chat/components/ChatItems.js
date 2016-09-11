import React, { Component, PropTypes } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import Scroll from 'react-scroll';
import uuid from 'uuid';
import classes from './ChatItems.scss';

const scroll = Scroll.animateScroll;
const Element = Scroll.Element;

export class ChatItems extends Component {
  static propTypes = {
    chatItems: PropTypes.array
  }

  componentDidUpdate() {
    scroll.scrollToBottom({
      containerId: 'chatItems',
      delay: 500,
      to: 'endChatItems'
    });
  }

  render() {
    const { chatItems } = this.props;

    return (
      <Row id="chatItems" className={classes.content}>
        {this._renderChatItems(chatItems)}
        <Element name="endChatItems" className="element"></Element>
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
    return <Col xs={12} key={uuid.v4()}>{item}</Col>;
  }
}

export default ChatItems;

