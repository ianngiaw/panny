import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classes from './PannyText.scss';
import './CardTransition.scss';

class PannyText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="transitioncard"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        <Grid>
          <Row className={classes.pannyTextContainer}>
            <Col xs={10} className={classes.pannyText}>
              { text }
            </Col>
          </Row>
        </Grid>
      </ReactCSSTransitionGroup>
    );
  }
}

export default PannyText;
