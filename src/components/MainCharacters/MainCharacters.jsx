import Highlight from '../Highlight/Highlight';
import CharacterScroller from '../CharacterScroller/CharacterScroller';
import CharacterTexts from '../CharacterTexts/CharacterTexts';
import './MainCharacters.css';
import { useSelector } from 'react-redux';

const MainCharacters =()=> {
  const scrollvalue = useSelector(state=>state.landingCharacterScroll);
  return (
    <div className="main-chars">
    <h1 className="mainchars-header"><Highlight color='white' backgroundColor='var(--black)'>Main</Highlight>&nbsp;&nbsp;Characters</h1>
    <div className="mainchars-content">
      <div className="mainchars-images-cont" style={{ backgroundColor: `var(--${['green','black','lime'][scrollvalue%3]})` }}>
        <CharacterScroller/>
      </div>
      <div className="mainchars-selector">
        <CharacterTexts/>
      </div>
    </div>
  </div>
  );
};

export default MainCharacters;