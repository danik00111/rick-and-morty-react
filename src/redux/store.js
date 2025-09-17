import * as reducers from './reducers'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    landingCharacterScroll: reducers.landingCharacterScrollReducer,
    isDesktop: reducers.isDesktopReducer,
    charactersList: reducers.charactersListReducer,
    charactersFilter: reducers.charactersFilterReducer
  },
});
export default store;