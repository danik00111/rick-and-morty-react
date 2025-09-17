import PropTypes from 'prop-types';
import './Header.css';
import { NavLink } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton'
import HeaderSearch from '../HeaderSearch/HeaderSearch'

const Header =({logo})=> (
  <header>
    <nav className={logo?'logo':'nologo'}>
      <ul>{
        logo ?(<NavLink to='/'><img src='src/assets/rnm-logo.png' className='header-logo'/></NavLink>):(<>
          <li className='header-nav'><LinkButton
            to='/characters' className='header-nav-button'
            bgc='var(--green)' color='var(--black)' border='0px black'
          >Characters</LinkButton></li>
          {/* <li className='header-nav'><LinkButton
            to='/episodes' className='header-nav-button'
            bgc='var(--black)' color='white' border='1px gray'
          >Episodes</LinkButton></li> */}
        </>)
      }</ul>
      <HeaderSearch/>
    </nav>
  </header>
);

Header.propTypes = {
  logo: PropTypes.bool
}

export default Header;