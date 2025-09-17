import { useEffect, useState } from 'react';
import mainCharacters from '../../data/mainCharacters';
import './CharacterTexts.css';
import { useDispatch } from 'react-redux';

const CharacterTexts =()=> {
  const dispatch = useDispatch();
  // let autoscrollvalue = 0;
  // let [asInterval,setAsInterval] = useState(0);
  // useEffect(()=>{
  //   setAsInterval(()=>{
  //     const id = setInterval(()=>{
  //       autoscrollvalue++;
  //       if(autoscrollvalue>=mainCharacters.length)
  //         autoscrollvalue %= mainCharacters.length;
  //       document.getElementById(`input-c${autoscrollvalue+1}`).checked = true;
  //       dispatch({ type: 'landing.maincharacters.scroller.set', payload: autoscrollvalue })
  //     },3e3);
  //     return id;
  //   });
  //   // return () => clearInterval(asInterval);
  //   // Make sure to ^ REEEEELEEEEEEEEASE MEEEEEEEEEEE this is why i prefer vanilla over poorly written libraries
  // },[]);
  // console.log(asInterval,asInterval,asInterval)
  // i'll the fix the stupid is they intervals later
  return (
    <div className="mainchars-text">
      {mainCharacters.map((x,i,r)=>(<div key={i}><div className="mainchars-section">
        <input
          id={`input-c${i+1}`} type="radio" hidden customindex={i}
          name="character" className="mainchar-radio" defaultChecked={i==0}
        />
        <label
          id={`label-c${i+1}`} htmlFor={`input-c${i+1}`} className="mainchar-name" customindex={i}
          onClick={((e)=>{
            // clearInterval(asInterval);
            const newscrollvalue = e.target.attributes.customindex.value;
            dispatch({ type: 'landing.maincharacters.scroller.set', payload: newscrollvalue })
          })}
        >{x.name}</label>
        <div className="mainchar-desc">{x.desc}</div>
      </div>{i!=r.length-1 && <hr/>}</div>))}
    </div>
  )
};

export default CharacterTexts;