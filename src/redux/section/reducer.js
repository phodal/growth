import { SAVE_SECTION } from './actions';

const initialState = {
  section: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case SAVE_SECTION:
      return {
        ...state,
        section: action.section,
      };

    default:
      return state;
  }
}
