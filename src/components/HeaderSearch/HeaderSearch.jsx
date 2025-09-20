import PropTypes from 'prop-types';
import './HeaderSearch.css'
import imageSearch from '../../img/search-icon.png';
import { Link } from 'react-router-dom';

const HeaderSearch =()=> (
  <Link to='/characters'>
    <div className="headersearch">
      <img className="headersearch-icon" src={imageSearch}/>
      <form>
        {/* <input type="text" className="headersearch-input" placeholder="Search"/> */}
        <div className="headersearch-input" style={{width:'150px'}}>Search</div>
      </form>
    </div>
  </Link>
);

HeaderSearch.propTypes = {
  searchDestination: PropTypes.string
}

export default HeaderSearch;