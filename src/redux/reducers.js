export const landingCharacterScrollReducer = (state=0, action) => {
  // state is any of 0 1 2 3 4
  if (action.type === "landing.maincharacters.scroller.set") return action.payload;
  return state;
};
export const isDesktopReducer = (state=true, action) => {
  // state is bool
  // console.log(state,action);
  if (action.type === "isdesktop.set") return action.payload;
  return state;
};
export const charactersListReducer = (state=[], action) => {
  if(action.type === "characters.list.reset") return [];
  if(action.type === "characters.list.add") return [ ...state, ...action.payload ];
  if(action.type === "characters.list.set") return action.payload;
  return [ ...state ];
}
const filterskeleton = { name: '', status: '', species: '', type: '', gender: '' }
export const charactersFilterReducer = (state=filterskeleton, action) => {
  if(action.type === "characters.filter.set") {
    // action.payload == { name: 'rick' }
    // action.payload == { status: 'alive' }
    return { ...state, ...action.payload };
  }
  return state;
}