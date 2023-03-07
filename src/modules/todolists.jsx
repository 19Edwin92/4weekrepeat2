// action.type
const PLUSE = "plusetodo"
const DONE = "donetodo"
const DELETE = "deletetodo"
const EDIT = "edittodo"


// action.creator
export const pluseTodo = (payload) => {
  return {
    type: PLUSE,
    payload,
  }
}

export const doneTodo = (payload) => {
  console.log(payload)
  return {
    type: DONE,
    payload,
  }
}

export const deleteTodo = (payload) => {
  console.log(payload)
  return {
    type: DELETE,
    payload,
  }
}

export const editTodo = (payload) => {
  console.log(payload)
  return {
    type: EDIT,
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
      const newTodo = {id:Date.now(), title:action.payload.title, txt: action.payload.txt, isDone:false};
      return [...state, newTodo];
    case DONE:
      const updateState = state.map((el, index)=> {
        if(el.id === action.payload) {
          return {...el, isDone:!el.isDone};
        } else {
          return el;
        }
      }) 
      return [...updateState];  
    case DELETE:
      const exceptiontodo = state.filter(el => el.id !== action.payload)
      return [...exceptiontodo];
    case EDIT:
      const findtodo = state.findIndex(el => el.id === Number(action.payload.id))
      const newtodo = [...state]
      newtodo.splice(findtodo,1,action.payload)
      console.log(newtodo)
      return [...newtodo]
    default:
      return state;
  }
});

export default todo;