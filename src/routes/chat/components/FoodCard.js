import React, { Component, PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
import Slider from 'react-slick';

import classes from './FoodCard.scss';

class FoodCard extends Component {
  static propTypes = {
    foodItems: PropTypes.array.isRequired,
    isFoodSelected: PropTypes.bool
  };

  render() {
    const { foodItems, isFoodSelected } = this.props;

    return (
      <Row className={classes.foodCardContainer}>
        { isFoodSelected ?
          <div className={classes.selectedFoodItem}>
            <div className={classes.foodName}>{foodItems[1].name}</div>
            <img className={classes.foodImage} src={foodItems[1].image}/>
          </div> :
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
        }
      </Row>
    );
  }
}

export default FoodCard;
