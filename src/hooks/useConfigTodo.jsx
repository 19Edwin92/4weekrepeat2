import { useSelector, useDispatch } from "react-redux";

export const useConfigTodo = () => {
  const todo = useSelector((state) => {
    return state.todo;
  });
  const dispatch = useDispatch();
  return [todo, dispatch]
}

// TDWrite.jsx 
export const useIsDone = () => {
  const todo = useSelector((state) => {
    return state.todo;
  });
  const isDoneF = todo.filter(el => !el.isDone)
  const isDoneT = todo.filter(el => el.isDone)
  return [isDoneF, isDoneT]
}