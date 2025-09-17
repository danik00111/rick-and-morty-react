// import './Main.css';
import Margin from '../../components/Margin/Margin';
import Landing from '../../components/Landing/Landing';
import Tagpile from '../../components/Tagpile/Tagpile';
import MainCharacters from '../../components/MainCharacters/MainCharacters';
import EpisodesTeaser from '../../components/EpisodesTeaser/EpisodesTeaser';

const Main =()=> (<>
  <Landing/>
  <Tagpile/>
  <Margin height='128px'/>
  <MainCharacters/>
  <Margin height='128px'/>
  <EpisodesTeaser/>
  <Margin height='0px'/>
  {/* <Footer darkmode={false}/> */}
</>);

// Main.propTypes = {
// };

export default Main;