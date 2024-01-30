export const START = "START";
export const WORK = "WORK";
export const SHORT_BREAK = "SHORT_BREAK";
export const LONG_BREAK = "LONG_BREAK";
export const DECREASE_SECOND = "DECREASE_SECOND";
export const DECREASE_MINUTES = "DECREASE_MINUTES";
export const RESET = "RESET";

export const start = () => ({
  type: START,
});
export const decrese_second = () => ({
  type: DECREASE_SECOND,
});
export const decrese_minutes = () => ({
  type: DECREASE_MINUTES,
});
export const work = () => ({
  type: WORK,
});
export const shork_break = () => ({
  type: SHORT_BREAK,
});
export const long_break = () => ({
  type: LONG_BREAK,
});
export const reset = () => ({
  type: RESET,
})
