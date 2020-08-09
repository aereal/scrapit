import React, {FC, useState, ChangeEventHandler} from "react"
import {TextField, Button} from "@material-ui/core"

export interface ShareFormProps {
  readonly url: string
  readonly title: string
}

type TextFieldChangeHandler = ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>

export const ShareForm: FC<ShareFormProps> = (props) => {
  const [url, setURL] = useState(props.url)
  const [title, setTitle] = useState(props.title)
  const handleChangeURL: TextFieldChangeHandler = (e) => {
    setURL(e.target.value)
  }
  const handleChangeTitle: TextFieldChangeHandler = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form noValidate>
      <TextField
        name="url"
        label="URL"
        fullWidth
        defaultValue={url}
        onChange={handleChangeURL}
      />
      <TextField
        name="title"
        label="Title"
        fullWidth
        defaultValue={title}
        onChange={handleChangeTitle}
      />
      <Button variant="contained" color="primary" size="large" fullWidth>
        Scrap
      </Button>
    </form>
  )
}
