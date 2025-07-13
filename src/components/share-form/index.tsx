"use client"

import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import {ChangeEventHandler, FC, FormEventHandler, useState} from "react"
import {formatScrapboxNotation} from "../../format-scrapbox-notation"
import {SubmitButton} from "./submit-button"

interface ShareFormProps {
  readonly url: string
  readonly title: string
}

export const ShareForm: FC<ShareFormProps> = (props) => {
  const [url, setURL] = useState(props.url)
  const [title, setTitle] = useState(props.title)
  const [project, setProject] = useState("")
  const handleChangeURL: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setURL(e.target.value)
  }
  const handleChangeTitle: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setTitle(e.target.value)
  }
  const handleChangeProject: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setProject(e.target.value)
  }
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    const pageURL = new URL(
      `https://scrapbox.io/${project}/${encodeURIComponent(title)}`,
    )
    const notation = formatScrapboxNotation(url, title)
    pageURL.searchParams.set("body", notation)
    window.open(pageURL.toString(), "_blank")
  }
  const valid = url !== "" && project !== ""
  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <TextField
        name="url"
        label="URL"
        defaultValue={url}
        onChange={handleChangeURL}
        fullWidth
        required
      />
      <TextField
        name="title"
        label="Title"
        defaultValue={title}
        onChange={handleChangeTitle}
        fullWidth
      />
      <TextField
        name="scrapbox_project"
        label="Scrapbox Project"
        defaultValue={project}
        onChange={handleChangeProject}
        fullWidth
        required
      />
      <SubmitButton disabled={!valid} />
    </Box>
  )
}
