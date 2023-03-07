import { pluseTodo } from "../modules/todolists";
import { useConfigTodo } from "./useConfigTodo";

export const useSubmit = ({value, setValue, set}) => {
  const [todo, dispatch] = useConfigTodo();
  const submitTodo = (e) => {
    e.preventDefault();
    dispatch(pluseTodo(value))
    setValue(set)
  }
  return [submitTodo]
}