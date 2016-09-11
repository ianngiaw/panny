import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import classes from './PannyText.scss';

class PannyText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { text } = this.props;

    return (
      <Grid>
        <Row className={classes.pannyTextContainer}>
          <Col xs={10} className={classes.pannyText}>
            { text }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default PannyText;
