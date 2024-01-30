import {
  DECREASE_MINUTES,
  DECREASE_SECOND,
  LONG_BREAK,
  RESET,
  SHORT_BREAK,
  START,
  WORK,
} from "../actions";

let inatialState = {
  minutes: 25,
  second: 0,
  isPlaying: false,
};

export const rootReducers = (state = inatialState, action) => {
  switch (action.type) {
    case START:
      if (state.isPlaying) {
        return { ...state, isPlaying: false };
      } else {
        if (state.second === 0) {
          return {
            ...state,
            isPlaying: true,
            minutes: state.minutes - 1,
            second: 59,
          };
        }
      }
    case DECREASE_SECOND:
      return {
        ...state,
        second: state.second <= 0 ? (state.second = 59) : state.second - 1,
      };
    case DECREASE_MINUTES:
      return {
        ...state,
        minutes: state.minutes - 1,
      };
    case WORK:
      return {
        ...state,
        minutes: (state.minutes = 25),
        second: 0,
        isPlaying: false,
      };
    case SHORT_BREAK:
      return {
        ...state,
        minutes: (state.minutes = 5),
        second: 0,
        isPlaying: false,
      };
    case LONG_BREAK:
      return {
        ...state,
        minutes: (state.minutes = 15),
        second: 0,
        isPlaying: false,
      };
    case RESET:
      return {
        ...state,
        second: (state.second = 0),
        minutes: (state.minutes = 25),
        isPlaying: (state.isPlaying = false),
      };
    default:
      return state;
  }
};
