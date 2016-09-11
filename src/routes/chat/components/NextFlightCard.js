import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { ActionFlightTakeoff } from 'material-ui/svg-icons';

import classes from './NextFlightCard.scss';

class NextFlightCard extends Component {
  static propTypes = {
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    flightNumber: PropTypes.string.isRequired,
    departureGate: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired
  };

  render() {
    const {
      origin,
      destination,
      flightNumber,
      departureGate,
      departureTime
    } = this.props;

    return (
      <Grid className={classes.nextFlightCard}>
        <Row>
          <Col xs={3} className={classes.airportLeft}>
            { origin }
          </Col>
          <Col xs={6} className={classes.flightProgress}>
            <ActionFlightTakeoff
              color="white"
              style={{
                height: '24px',
                width: '24px',
                position: 'absolute',
                top: '10px',
                left: '16px'
              }}
            />
            <div className={classes.circle}></div>
            <div className={classes.bar}></div>
            <div className={classes.circle}></div>
          </Col>
          <Col xs={3} className={classes.airportRight}>
            { destination }
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <div className={classes.bottomRowLabel}>Flight No.</div>
            <div className={classes.bottomRowValue}>{ flightNumber }</div>
          </Col>
          <Col xs={4}>
            <div className={classes.bottomRowLabel}>Gate</div>
            <div className={classes.bottomRowValue}>{ departureGate }</div>
          </Col>
          <Col xs={4}>
            <div className={classes.bottomRowLabel}>Time</div>
            <div className={classes.bottomRowValue}>{ departureTime }</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default NextFlightCard;
