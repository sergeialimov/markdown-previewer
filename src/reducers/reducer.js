const initialState = {
  text: 'some text',
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEXT':
      return action.text;
    default:
      return state;
  }
};