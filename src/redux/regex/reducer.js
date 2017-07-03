import { CHOICE_REGEX } from './actions';

const initialState = {
  regex: {
    name: '',
    regex: /1-9a-Z/,
    descriptions: '',
    tag: '',
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case CHOICE_REGEX:
      return {
        ...state,
        regex: action.regex,
      };

    default:
      return state;
  }
}
