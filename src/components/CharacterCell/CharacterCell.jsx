import './CharacterCell.css';

const CharacterCell =(props)=> {
  return (
    <div className='charactercell'>
      <div className='charactercell-image' style={{backgroundImage:`url(${props.image})`}} alt={props.name}/>
      <p className='charactercell-name'>{props.name}</p>
      <p className='charactercell-origin'>Origin: <span>{props.origin.name}</span></p>
      <p className='charactercell-location'>Location: <span>{props.location.name}</span></p>
    </div>
  );
};

CharacterCell.propTypes = {
  
};

export default CharacterCell;