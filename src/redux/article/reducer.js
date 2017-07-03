import { SAVE_ARTICLE } from './actions';

const initialState = {
  article: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case SAVE_ARTICLE:
      return {
        ...state,
        regex: action.regex,
      };

    default:
      return state;
  }
}
