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
            second: 59,
            minutes:
              state.minutes <= 0 ? (state.isPlaying = 0) : state.minutes - 1,
          };
        }
      }
    case DECREASE_SECOND:
      if (state.second >= 0) {
        return { ...state, second: state.second - 1 };
      } else if (state.minutes <= 0) {
        if (state.second <= 0) {
          return { ...state, second: (state.second = 0), isPlaying: false };
        }
      }
    case DECREASE_MINUTES:
      return {
        ...state,
        minutes: state.minutes <= 0 ? (state.isPlaying = 0) : state.minutes - 1,
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
