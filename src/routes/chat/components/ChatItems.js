import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
import transitionClasses from './CardTransition.scss';

const scroll = Scroll.animateScroll;
const Element = Scroll.Element;

export class ChatItems extends Component {
  static propTypes = {
    chatItems: PropTypes.array,
    isFoodSelected: PropTypes.bool
  }

  componentDidMount() {
    const elem = document.querySelector('#chatItems');
    elem.addEventListener('touchstart', function(event) {
      this.allowUp = (this.scrollTop > 0);
      this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
      this.prevTop = null;
      this.prevBot = null;
      this.lastY = event.pageY;
    });

    elem.addEventListener('touchmove', function(event) {
      let up = (event.pageY > this.lastY);
      let down = !up;

      this.lastY = event.pageY;

      if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
      } else {
        event.preventDefault();
      }
    });
  }

  componentDidUpdate() {
    scroll.scrollToBottom({
      containerId: 'chatItems',
      delay: 500,
      to: 'endChatItems'
    });
  }

  render() {
    const { chatItems, isFoodSelected } = this.props;

    return (
      <Row id="chatItems" className={classes.content}>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: transitionClasses.transitioncardEnter,
            enterActive: transitionClasses.transitioncardEnterActive
          }}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          {this._renderChatItems(chatItems, isFoodSelected)}
        </ReactCSSTransitionGroup>
        <Element name="endChatItems" className="element"></Element>
      </Row>
    );
  }

  _renderChatItems(items, isFoodSelected) {
    return items.map((item, index) => this._renderChatItem(item, index, isFoodSelected));
  }

  _renderChatItem(item, index, isFoodSelected) {
    const data = item.data;
    switch (item.type) {
      case 'CurrentFlightCard':
        return (<CurrentFlightCard key={index} {...data} />);
      case 'FoodCard':
        return (<FoodCard key={index} {...data} isFoodSelected={isFoodSelected} />);
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
