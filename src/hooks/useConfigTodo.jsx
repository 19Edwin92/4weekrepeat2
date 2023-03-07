import { useSelector, useDispatch } from "react-redux";

export const useConfigTodo = () => {
  const todo = useSelector((state) => {
    return state.todo;
  });
  const dispatch = useDispatch();
  return [todo, dispatch]
}
