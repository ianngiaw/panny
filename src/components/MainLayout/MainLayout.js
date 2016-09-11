import React, { Component, PropTypes } from 'react';
import {
  Grid
} from 'react-bootstrap';

import classes from './MainLayout.scss';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object
  };

  render() {
    const { children } = this.props;
    const isActive = this.props.location.pathname === '/chat';
    const bgImageUrl = 'http://i.imgur.com/PYOgeoO.png';
    const bgImageClass = isActive ? classes.bgImageActive : classes.bgImage;
    return (
      <div>
        <img className={bgImageClass} src={bgImageUrl} />
        <Grid fluid={true}>
          {children}
        </Grid>
      </div>
    );
  }
}

export default MainLayout;
