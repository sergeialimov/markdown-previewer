const initialState = {
  text: 'some text',
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TEXT':
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};