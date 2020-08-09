import React, {FC, useState, ChangeEventHandler, FormEventHandler} from "react"
import {TextField, Button} from "@material-ui/core"
import {formatScrapboxNotation} from "../format-scrapbox-notation"

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
  const [scrapboxProject, setScrapboxProject] = useState<string>()
  const handleChangeURL: TextFieldChangeHandler = (e) => {
    setURL(e.target.value)
  }
  const handleChangeTitle: TextFieldChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeProject: TextFieldChangeHandler = (e) => {
    setScrapboxProject(e.target.value)
  }
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    const pageURL = new URL(
      `https://scrapbox.io/${scrapboxProject!}/${encodeURIComponent(title)}`,
    )
    const notation = formatScrapboxNotation(url, title)
    pageURL.searchParams.set("body", notation)
    window.open(pageURL.toString(), "_blank")
  }
  const valid =
    url !== "" && scrapboxProject !== undefined && scrapboxProject !== ""

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        name="url"
        label="URL"
        fullWidth
        defaultValue={url}
        required
        onChange={handleChangeURL}
      />
      <TextField
        name="title"
        label="Title"
        fullWidth
        defaultValue={title}
        onChange={handleChangeTitle}
      />
      <TextField
        name="scrapbox_project"
        label="Scrapbox Project"
        fullWidth
        defaultValue={scrapboxProject}
        required
        onChange={handleChangeProject}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        disabled={!valid}
        fullWidth
      >
        Scrap
      </Button>
    </form>
  )
}
