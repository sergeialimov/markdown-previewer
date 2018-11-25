export const reducer = (state = 0, action) => {
  switch (action.type) {
    case '':
      return action.num;
    default:
      return state;
  }
};