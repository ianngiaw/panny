import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { Link } from 'react-router';
import classes from './HomeView.scss';

class HomeView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2} className={classes.getStarted}>
            <Link to="/chat">
              <Button className={classes.getStartedBtn} bsSize="lg">Get Started</Button>
            </Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeView;
