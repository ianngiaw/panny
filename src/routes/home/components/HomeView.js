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
  componentDidMount() {
    const elem = document.querySelector('#home');
    elem.addEventListener('touchstart', function(event) {
      this.allowUp = (this.scrollTop > 0);
      this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
      this.prevTop = null;
      this.prevBot = null;
      this.lastY = event.pageY;
    });

    elem.addEventListener('touchmove', function(event) {
      let up = (event.pageY > this.lastY);
      let down = !up;

      this.lastY = event.pageY;

      if ((up && this.allowUp) || (down && this.allowDown)) {
        event.stopPropagation();
      } else {
        event.preventDefault();
      }
    });
  }

  render() {
    return (
      <Grid id="home">
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
