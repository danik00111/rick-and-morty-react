import mainCharacters from '../../data/mainCharacters';
import './CharacterScroller.css';
import { useSelector } from 'react-redux';
import char1 from '../../img/main-characters/char1.png';
import char2 from '../../img/main-characters/char2.png';
import char3 from '../../img/main-characters/char3.png';
import char4 from '../../img/main-characters/char4.png';
import char5 from '../../img/main-characters/char5.png';
const chars = [ char1, char2, char3, char4, char5 ];

const CharacterScroller =()=> {
  const scrollvalue = useSelector(state=>state.landingCharacterScroll);
  return (
  <div id="mainchars-images-scroller" className="mainchars-images-scroller" style={{
    transform: `translateY(-${640*scrollvalue}px)`
  }}>
    {mainCharacters.map((x,i)=>(<div className="mainchar-image-cont" key={x.id}>
      <img src={chars[i]} alt={x.name} className="mainchar-image"/>
    </div>))}
  </div>
  );
};

export default CharacterScroller;