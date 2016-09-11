import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import classes from './RestroomCard.scss';

class RestroomCard extends Component {
  static propTypes = {
    isFull: PropTypes.bool.isRequired
  };

  render() {
    const { isFull } = this.props;

    return (
      <Grid>
        <Row className={classes.restroomCardContainer}>
          <Col xs={12}>
            <img
              className={classes.restroomImage}
              src={ isFull ? 'http://i.imgur.com/EWrr79W.gif' : 'http://i.imgur.com/vnCfgBT.gif' }
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default RestroomCard;
