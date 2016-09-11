import React, { Component, PropTypes } from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import Scroll from 'react-scroll';

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

  _renderChatItem(item, index) {
    const data = item.data;
    switch (item.type) {
      case 'CurrentFlightCard':
        return (<CurrentFlightCard key={index} {...data} />);
      case 'FoodCard':
        return (<FoodCard key={index} {...data} />);
      case 'NextFlightCard':
        return (<NextFlightCard key={index} {...data} />);
      case 'RestroomCard':
        return (<RestroomCard key={index} {...data} />);
      case 'PannyText':
        return (<PannyText key={index} {...data} />);
      case 'UserText':
        return (<UserText key={index} {...data} />);
      default:
        return <Col key={index}>Item</Col>;
    }
  }
}

export default ChatItems;
