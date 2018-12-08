export const reducer = (state = 1, action) => {
  switch (action.type) {
    case 'TEXT':
      return action.text;
    default:
      return state;
  }
};