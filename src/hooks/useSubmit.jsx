import { pluseTodo, editTodo } from "../modules/todolists";
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

export const useEitsubmit = ({item, value, setValue, setEdit, set}) => {
  const [todo, dispatch] = useConfigTodo();
  const editsubmitTodo = (e) => {
    e.preventDefault();
    dispatch(editTodo({...item, txt: value.title}))
    setValue(set)
    setEdit((pre)=> !pre);
  }
  return [editsubmitTodo]
}