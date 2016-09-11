import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import classes from './UserText.scss';

class UserText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;

    return (
      <Grid>
        <Row className={classes.userTextContainer}>
          <Col xs={10} xsOffset={2} className={classes.userText}>
            { text }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default UserText;
