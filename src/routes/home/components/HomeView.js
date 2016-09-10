import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import classes from './HomeView.scss';

class HomeView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4} xsOffset={4} className={classes.getStarted}>
            <Button className={classes.getStartedBtn} bsSize="lg">Get Started</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeView;
