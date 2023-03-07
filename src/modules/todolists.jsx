// action.type
const PLUSE = "plusetodo"


// action.creator
export const pluseTodo = (payload) => {
  return {
    type: PLUSE,
    payload,
  }
}


const initial = [
  {id:123456, title:"리액트만들기(1)", txt:"리액트 만들기란", isDone:false},
  {id:123457, title:"리액트만들기(2)", txt:"리액트 만들기란", isDone:false},
  {id:123458, title:"리액트만들기(3)", txt:"리액트 만들기란", isDone:true},
  {id:123459, title:"리액트만들기(4)", txt:"리액트 만들기란", isDone:true},
];

const todo = ((state=initial, action) => {
  switch (action.type) {
    case PLUSE:
      const newTodo = {id:Date.now(), title:action.payload.title, txt: action.payload.txt, isDone:false}
      return [...state, newTodo]
    default:
      return state;
  }
});

export default todo;