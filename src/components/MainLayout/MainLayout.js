import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row
} from 'react-bootstrap';

import Header from '../Header/Header';
import classes from './MainLayout.scss';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isActive: PropTypes.bool
  };

  render() {
    const { children } = this.props;
    const isActive = true;
    return (
      <Grid fluid={true} className={classes.mainContainer}>
        <Header isActive={isActive} />
        <Row>
          {children}
        </Row>
      </Grid>
    );
  }
}

export default MainLayout;
