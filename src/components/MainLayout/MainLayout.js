import React, { Component, PropTypes } from 'react';
import {
  Grid
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
    const isActive = false;
    return (
      <Grid fluid={true} className={classes.mainContainer}>
        {isActive ? <div className={classes.overlay} /> : ''}
        <Header isActive={isActive} />
        {children}
      </Grid>
    );
  }
}

export default MainLayout;
