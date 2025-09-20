import imageTag from '../../img/tags.png'
import './Tagpile.css';
const Tagpile =()=> { return (
  <div className='tagpile-container'>
    <img className="tagpile" /* src="/img/tags.png" */ src={imageTag} alt=""/>
  </div>
) };
export default Tagpile;