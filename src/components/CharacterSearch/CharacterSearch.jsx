import CharFilters from '../CharFilters/CharFilters';
import * as rmAPI from 'rickmortyapi';
import CharacterCell from '../CharacterCell/CharacterCell';
import './CharacterSearch.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

// const firstchars = (await rmAPI.getCharacters({page:1})).data;

const CharacterSearch =()=> {
  const dispatch = useDispatch();
  const isDesktop = useSelector(x=>x.isDesktop);
  const chars = useSelector(x=>x.charactersList);
  const filter = useSelector(x=>x.charactersFilter);
  const useEffectRan = useRef(false);
  // async function firstFetch() {
  //   const firstchars = (await rmAPI.getCharacters({page:1})).data;
  // }
  useEffect(()=>{
    if(useEffectRan.current) return;
    useEffectRan.current = true;
    // firstFetch();
    // console.log(firstchars.results);
    const isdesk = parseInt(window.innerWidth) > 1111;
    // dispatch({ type: 'isdesktop.set', payload: isdesk });
    loadmore();
    return () => { dispatch({type:'characters.list.reset'}) };
  },[])
  const loadmore = async() => {
    // TODO: make it stop
    const pageToLoad = Math.floor(chars.length/20)+1;
    // console.log('abcd', pageToLoad);
    const characterbatch = await rmAPI.getCharacters({page:pageToLoad,...filter})
    /*
    const aliveRicks = await getCharacters({ name: 'rick', status: 'alive' })
    const planets = await getLocations({ type: 'planet', page: 2 })
    const seasonOne = await getEpisodes({ episode: 's01' })
    */
   // console.log('fghi', characterbatch);
    const pageLoadedAmount = chars.length;
    let toload = [];
    if(isDesktop) {
      if(pageLoadedAmount == characterbatch.data.info.count) { alert ('no more to load'); return }
      if(pageLoadedAmount%20 != 0) { alert('congrats you broke the website! have a cookie 🍪'); return; }
      toload = characterbatch.data.results;
    } else if(pageLoadedAmount%20 ==0 ) {
      toload = characterbatch.data.results.slice(0,10);
    } else toload = characterbatch.data.results.slice(10);
    if(toload.length) dispatch({type:'characters.list.add',payload:toload});
    else alert('no more to load')
  }
  return (
    <>
      <CharFilters/>
      <div className='characters-container'>
        {chars.map(x=><CharacterCell {...x} key={x.id} />)}
      </div>
      <button className='loadmore' onClick={(async(event)=>{
        event.target.disabled = true;
        await loadmore();
        event.target.disabled = false;
      })}>Load {isDesktop ? '20' : '10'} more</button>
    </>
  );
};

export default CharacterSearch;