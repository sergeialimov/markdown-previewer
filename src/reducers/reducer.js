import defaultText from './../defaultText.js'; 

const initialState = {
  text: defaultText,
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