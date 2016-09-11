import React, { Component, PropTypes } from 'react';
import {
  Grid
} from 'react-bootstrap';

import Header from '../Header/Header';
import classes from './MainLayout.scss';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object
  };

  render() {
    const { children } = this.props;
    const isActive = this.props.location.pathname === '/chat';
    const bgImageUrl = isActive ? 'http://i.imgur.com/sS3pZMY.png': 'http://i.imgur.com/PYOgeoO.png';
    const bgImageClass = isActive ? classes.bgImage : classes.bgImageActive;
    return (
      <div>
        <img className={bgImageClass} src={bgImageUrl} />
        <Grid fluid={true} className={classes.mainContainer}>
          {children}
          <Header isActive={isActive} />
        </Grid>
      </div>
    );
  }
}

export default MainLayout;
