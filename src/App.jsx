import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Characters from './pages/Characters/Characters';
import Footer from './components/Footer/Footer';
import debounce from './functions/debounce';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
  const isDesktopUpdater =()=> {
    const isdesktop = parseInt(window.innerWidth) > 1111;
    dispatch({ type: 'isdesktop.set', payload: isdesktop })
  }
  isDesktopUpdater();
    window.addEventListener('resize',debounce(isDesktopUpdater,250));
  },[]);

  return (<>
    <Header logo={location.pathname!='/'}/>
    <Routes>
      <Route exact path='/' element={<Main/>}/>
      <Route path='/characters' element={<Characters/>}/>
      {/* <Route path='/episodes' element={<Episodes/>}/> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer light={location.pathname=='/'}/>
  </>)
}

export default App
