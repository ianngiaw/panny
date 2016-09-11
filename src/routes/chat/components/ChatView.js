import React, { Component } from 'react';
import {
  Grid,
  Row
} from 'react-bootstrap';
import classes from './ChatView.scss';

class MyRouteView extends Component {
  render() {
    return (
      <Grid className={classes.chatView}>
        <Row>
          <p>Chat View</p>
        </Row>
      </Grid>
    );
  }
}

export default MyRouteView;
