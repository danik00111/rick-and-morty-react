import mainCharacters from '../../data/mainCharacters';
import './CharacterScroller.css';
import { useSelector } from 'react-redux';

const CharacterScroller =()=> {
  const scrollvalue = useSelector(state=>state.landingCharacterScroll);
  return (
  <div id="mainchars-images-scroller" className="mainchars-images-scroller" style={{
    transform: `translateY(-${640*scrollvalue}px)`
  }}>
    {mainCharacters.map(x=>(<div className="mainchar-image-cont" key={x.id}>
      <img src={x.path} alt={x.name} className="mainchar-image"/>
    </div>))}
  </div>
  );
};

export default CharacterScroller;