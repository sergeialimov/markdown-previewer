export const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'TEXT':
      return action.text;
    default:
      return state;
  }
};