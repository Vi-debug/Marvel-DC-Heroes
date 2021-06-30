import { GET_HEROES } from "./actions";

const initialState = {
  heroes: []
}

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return {...state, heroes: action.payload}
    default:
      return state;
  }
}

export default heroesReducer