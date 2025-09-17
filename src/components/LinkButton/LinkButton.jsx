import React from 'react';
import PropTypes from 'prop-types';
import './LinkButton.css';
import { Link } from 'react-router-dom';

const LinkButton = ({to,className,children,bgc,color,border='0px black',extrastyle}) => (
  <Link to={to}>
    <button className={'linkbutton ' + className} style={{backgroundColor:bgc,color,boxShadow:`0 0 0 ${border} inset`,...extrastyle}}>
      {children}
    </button>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string,
  bgc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string,
  extrastyle: PropTypes.object
};

export default LinkButton;