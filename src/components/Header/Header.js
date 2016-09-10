import React, { PropTypes } from 'react';
import {
  Row
} from 'react-bootstrap';
// import classes from './Header.scss';

export const Header = ({ isActive }) => (
  <Row>{isActive}</Row>
);

Header.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Header;

