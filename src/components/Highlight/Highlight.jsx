import PropTypes from 'prop-types';

const Highlight = ({children,backgroundColor,color}) => (<span style={{
  backgroundColor,
  color,
  borderRadius: '9999px',
  padding: '0px +8px +2px',
  margin: '-0px -8px -2px',
}}>{children}</span>)

Highlight.propTypes = {
  children: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Highlight;