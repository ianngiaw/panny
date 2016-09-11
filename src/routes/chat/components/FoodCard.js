import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import Slider from 'react-slick';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classes from './FoodCard.scss';
import './CardTransition.scss';

class FoodCard extends Component {
  static propTypes = {
    foodItems: PropTypes.array.isRequired
  };

  render() {
    const { foodItems } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="transitioncard"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Row className={classes.foodCardContainer}>
          <Slider
            arrows={false}
            infinite={true}
            centerMode={true}
          >
            {foodItems.map((item, index) => {
              return (
                <div className={classes.foodItem} key={index}>
                  <div className={classes.foodName}>{item.name}</div>
                  <img className={classes.foodImage} src={item.image}/>
                </div>
              );
            })}
          </Slider>
        </Row>
      </ReactCSSTransitionGroup>
    );
  }
}

export default FoodCard;
