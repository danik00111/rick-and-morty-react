import PropTypes from 'prop-types';
import CharFilter from '../CharFilter/CharFilter';
import './CharFilters.css';
import characterTypes from '../../data/characterTypes';
import debounce from '../../functions/debounce';
import { useDispatch } from 'react-redux';
import * as rmAPI from 'rickmortyapi';

const CharFilters =()=> {
  const dispatch = useDispatch();
  const filterRefresh = debounce(async()=>{
    const inputs = [
      'name', 'status', 'species',
      'type', 'gender'
    ].map(x=>document.getElementById(`charfilter-input-${x}`).value);
    const newfilter = {
      name: inputs[0],
      status: inputs[1],
      species: inputs[2],
      type: inputs[3],
      gender: inputs[4]
    }
    dispatch({type:'characters.filter.set',payload:newfilter});
    const firstpage = (await rmAPI.getCharacters({page:1,...newfilter}))
    dispatch({type:'characters.list.set',payload:firstpage.data.results});
  },0.5e3);

  const charfilteronchange =e=> {
    if(e.target.value==='') { filterRefresh(); return; } // treated as 'all'
    const datalist = e.target.parentElement.querySelector('datalist');
    if(!datalist) { filterRefresh(); return; }
    const options = [...datalist.querySelectorAll('option')].map(x=>x.value);
    if(!options.map(x=>x.toLowerCase()).includes(e.target.value.toLowerCase())) return;
    filterRefresh();
  }

  return (
    <div className='charfilters-flex'>
      <CharFilter onChange={charfilteronchange} dropdown={false} name='Name' inputid='name' placeholder='Enter Name'/>
      <div className='charfilters-flexwrap-grouper'>
        <CharFilter onChange={charfilteronchange} dropdown={true} name='Status' inputid='status' searchoptions={['All','Alive','Unknown','Dead']}/>
        <CharFilter onChange={charfilteronchange} dropdown={true} name='Species' inputid='species' searchoptions={["All", "Human", "Alien", "Mythological Creature", "Humanoid", "Animal", "Cronenberg", "Poopybutthole", "Robot", "Disease"]}/>
      </div>
      <div className='charfilters-flexwrap-grouper'>
        <CharFilter onChange={charfilteronchange} dropdown={true} name='Type' inputid='type' searchoptions={characterTypes}/>
        <CharFilter onChange={charfilteronchange} dropdown={true} name='Gender' inputid='gender' searchoptions={['All','Male','Female','Genderless','Unknown']}/>
      </div>
    </div>
  );
};

export default CharFilters;