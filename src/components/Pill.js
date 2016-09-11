import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import classes from './Pill.scss';

export const Pill = ({ children }) => (
  <Button className={classes.pill} bsSize='lg'>{children}</Button>
);

Pill.propTypes = {
  children: PropTypes.element.isRequired
};

export default Pill;
