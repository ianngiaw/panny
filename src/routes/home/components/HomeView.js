import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router';
import classes from './HomeView.scss';

import Pill from '../../../components/Pill';

class HomeView extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={8} xsOffset={2} className={classes.getStarted}>
            <Link to="/chat">
              <Pill>Get Started</Pill>
            </Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default HomeView;
