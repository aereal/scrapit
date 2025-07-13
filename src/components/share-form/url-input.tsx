import TextField from "@mui/material/TextField"
import {ChangeEventHandler} from "react"
import {useSetURL, useURLValue} from "../../atoms"

export const URLInput = () => {
  const url = useURLValue()
  const setURL = useSetURL()
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setURL(e.target.value)
  }
  return (
    <TextField
      name="url"
      label="URL"
      defaultValue={url}
      onChange={handleChange}
      fullWidth
      required
    />
  )
}
