import React, { Component, PropTypes } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import Scroll from 'react-scroll';
import uuid from 'uuid';

import CurrentFlightCard from './CurrentFlightCard';
import FoodCard from './FoodCard';
import NextFlightCard from './NextFlightCard';
import RestroomCard from './RestroomCard';
import PannyText from './PannyText';
import UserText from './UserText';

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
    const data = item.data;
    switch (item.type) {
      case 'CurrentFlightCard':
        return (<CurrentFlightCard key={uuid.v4()} {...data} />);
      case 'FoodCard':
        return (<FoodCard key={uuid.v4()} {...data} />);
      case 'NextFlightCard':
        return (<NextFlightCard key={uuid.v4()} {...data} />);
      case 'RestroomCard':
        return (<RestroomCard key={uuid.v4()} {...data} />);
      case 'PannyText':
        return (<PannyText key={uuid.v4()} {...data} />);
      case 'UserText':
        return (<UserText key={uuid.v4()} {...data} />);
      default:
        return <Col key={uuid.v4()}>Item</Col>;
    }
  }
}

export default ChatItems;
