const initial = [
  {id:123456, title:"리액트만들기(1)", txt:"리액트 만들기란", isDone:false},
  {id:123457, title:"리액트만들기(2)", txt:"리액트 만들기란", isDone:false},
];

const todo = ((state=initial, action) => {
  switch (action.type) {
    default:
      return state;
  }
});

export default todo;