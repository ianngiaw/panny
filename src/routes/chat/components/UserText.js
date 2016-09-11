import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import classes from './UserText.scss';
import './CardTransition.scss';

class UserText extends Component {
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
          <Row className={classes.userTextContainer}>
            <Col xs={10} xsOffset={2} className={classes.userText}>
              { text }
            </Col>
          </Row>
        </Grid>
      </ReactCSSTransitionGroup>
    );
  }
}

export default UserText;
