import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import classes from './Pill.scss';

export const Pill = ({ children, onClick }) => (
  <Button className={classes.pill} bsSize='lg' onClick={onClick}>{children}</Button>
);

Pill.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default Pill;
