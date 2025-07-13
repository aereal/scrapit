import TextField from "@mui/material/TextField"
import {ChangeEventHandler} from "react"
import {useSetTitle, useTitleValue} from "../../atoms"

export const TitleInput = () => {
  const title = useTitleValue()
  const setTitle = useSetTitle()
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setTitle(e.target.value)
  }
  return (
    <TextField
      name="title"
      label="Title"
      defaultValue={title}
      onChange={handleChange}
      fullWidth
    />
  )
}
