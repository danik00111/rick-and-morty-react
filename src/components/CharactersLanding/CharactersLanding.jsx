import './CharactersLanding.css';
import imageRick from '../../img/main-characters/char1.png';

const CharactersLanding =()=>(<div className='characters-landing'>
  <div className='characters-landing-text'>
    <h1 className='characters-landing-title'>Characters</h1>
    <p className='characters-landing-desc'>Our character bios provide detailed information on every member of the Smith family and beyond. Get to know these unforgettable characters on a whole new level - start exploring now!</p>
  </div>
  <div className='characters-landing-image-cont'>
    <img className='characters-landing-image' src={imageRick}/>
  </div>
</div>);

export default CharactersLanding;