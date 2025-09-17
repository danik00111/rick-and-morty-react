import PropTypes from 'prop-types';
import './HeaderSearch.css'

const HeaderSearch =()=> (
  <div className="headersearch">
    <img className="headersearch-icon" src='src/assets/search-icon.png'/>
    <form>
      <input type="text" className="headersearch-input" placeholder="Search"/>
    </form>
  </div>
);

HeaderSearch.propTypes = {
  searchDestination: PropTypes.string
}

export default HeaderSearch;