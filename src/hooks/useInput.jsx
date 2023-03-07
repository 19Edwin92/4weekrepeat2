import { useState } from "react";

export const useInput = (initial) => {
  const [value, setValue] = useState(initial)

  const handler = (e) => {
    setValue({
      ...value, [e.target.name] : e.target.value
    })
  }

  return [value, setValue, handler]
}
