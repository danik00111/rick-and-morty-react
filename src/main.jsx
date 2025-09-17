import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './normalize.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* setinterval and useeffect can go unload a full shotgun into themselves */}
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <App/>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
