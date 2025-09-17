import PropTypes from 'prop-types';
import './CharFilter.css';

const CharFilter =({dropdown,name,searchoptions,inputid,placeholder,onChange})=> {
  return (
    <div className='charfilter-container'>
      {dropdown ? (<>
        <label className='charfilter-name'>{name}</label>
        <input onChange={onChange} className='charfilter-input' id={`charfilter-input-${inputid}`} type="text" placeholder={placeholder??''} list={'dl-'+inputid}/>
        <datalist id={'dl-'+inputid}>
          {searchoptions.map(x=><option value={x} key={`option-${inputid}-${x}`}/>)}
        </datalist>
      </>) : (<>
        <label className='charfilter-name'>{name}</label>
        <input onChange={onChange} className='charfilter-input' id={`charfilter-input-${inputid}`} type="text" placeholder={placeholder??''} style={{backgroundColor:'var(--lime)'}}/>
      </>)}
    </div>
  );
};

CharFilter.propTypes = {
  dropdown: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputid: PropTypes.string.isRequired,
  searchoptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  onChange: PropTypes.func
};

export default CharFilter;