import { Link } from "react-router-dom";
import './EpisodesTeaser.css';
import LinkButton from "../LinkButton/LinkButton";
import imageThumbnail1 from '../../img/main-thumbnails-scroll/thumb1.png';
import imageThumbnail2 from '../../img/main-thumbnails-scroll/thumb2.png';
import imageThumbnail3 from '../../img/main-thumbnails-scroll/thumb3.png';
import imageThumbnail4 from '../../img/main-thumbnails-scroll/thumb4.png';
import imageThumbnail5 from '../../img/main-thumbnails-scroll/thumb5.png';
const imageThumbnails = [ imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4, imageThumbnail5 ];
// Could shorten with something like import.meta.glob but ehhhhh who cares

const EpisodesTeaser =()=> (<div className="episodes-tease">
  <h1 className="episodes-header">Ready to <span className="highlightgreen">explore</span> the crazy world of Rick and Morty?</h1>
  <div className="episodes-carousel">
    {Array(5).fill(0).map((_,i)=>(<img
      className="episode-thumbnail" key={i+1}
      // src={`/img/main-thumbnails-scroll/thumb${i+1}.png`}
      src={imageThumbnails[i]}
      style={{animation: `et1 10s -${i*2}s linear infinite`,backgroundSize:'cover'}}
      />))}
    <p className="widescreen-easter-egg wide-easter-egg">fun fact: your screen is wider than 1600px!</p>
    <p className="widescreen-easter-egg ultrawide-easter-egg">bro stop breaking my website 😭</p>
    <p className="widescreen-easter-egg maxwide-easter-egg">YOUR{(' '/*nbsp*/).repeat(15)}TOO{(' ').repeat(15)}WIDE{(' ').repeat(20)}D:</p>
  </div>
  <LinkButton to="./characters" className="episodes-button"
    bgc='var(--green)' color='var(--black)' border='0px black'
    extrastyle={{
      position: 'relative',
      left: '50%',
      transform: 'translateX(calc(-50% - 128px))'
  }}>Characters</LinkButton>
</div>);

export default EpisodesTeaser;