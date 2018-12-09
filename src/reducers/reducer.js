const defaultText = 'some text';

export const reducer = (state = defaultText, action) => {
  switch (action.type) {
    case 'TEXT':
      return action.text;
    default:
      return state;
  }
};