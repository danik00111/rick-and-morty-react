import PropTypes from 'prop-types';
import './HeaderSearch.css'
import imageSearch from '../../img/search-icon.png';

const HeaderSearch =()=> (
  <div className="headersearch">
    <img className="headersearch-icon" src={imageSearch}/>
    <form>
      <input type="text" className="headersearch-input" placeholder="Search"/>
    </form>
  </div>
);

HeaderSearch.propTypes = {
  searchDestination: PropTypes.string
}

export default HeaderSearch;