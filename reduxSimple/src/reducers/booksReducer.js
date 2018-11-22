const initialState = [
    {title: 'harry potter', pages: 200},
    {title: 'Lord of right', pages: 120},
    {title: 'Summer vacations', pages: 340},
    {title: 'Honour of something', pages: 88},
    {title: 'Well man', pages: 76}
  ];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      break;
  }
  return state;
};

export default booksReducer;
