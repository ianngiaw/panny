import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { ActionFlightTakeoff } from 'material-ui/svg-icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classes from './CurrentFlightCard.scss';
import './CardTransition.scss';

class CurrentFlightCard extends Component {
  static propTypes = {
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    estimatedArrival: PropTypes.string.isRequired,
    timeRemaining: PropTypes.string.isRequired,
    distanceRemaining: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  };

  render() {
    const {
      origin,
      destination,
      estimatedArrival,
      timeRemaining,
      distanceRemaining,
      progress
    } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="transitioncard"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Grid className={classes.currentFlightCard}>
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
                  left: `${116 * progress + 16}px`
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
              <div className={classes.bottomRowLabel}>Est. Arrival</div>
              <div className={classes.bottomRowValue}>{ estimatedArrival }</div>
            </Col>
            <Col xs={4}>
              <div className={classes.bottomRowLabel}>Time Left</div>
              <div className={classes.bottomRowValue}>{ timeRemaining }</div>
            </Col>
            <Col xs={4}>
              <div className={classes.bottomRowLabel}>Dist. Left</div>
              <div className={classes.bottomRowValue}>{ distanceRemaining }</div>
            </Col>
          </Row>
        </Grid>
      </ReactCSSTransitionGroup>
    );
  }
}

export default CurrentFlightCard;
