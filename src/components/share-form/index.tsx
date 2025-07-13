import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import {ChangeEventHandler, FC, FormEventHandler} from "react"
import {
  useProjectValue,
  useSetProject,
  useSetTitle,
  useSetURL,
  useTitleValue,
  useURLValue,
} from "../../atoms"
import {formatScrapboxNotation} from "../../format-scrapbox-notation"
import {SubmitButton} from "./submit-button"

export const ShareForm: FC = () => {
  const url = useURLValue()
  const setURL = useSetURL()
  const title = useTitleValue()
  const setTitle = useSetTitle()
  const project = useProjectValue()
  const setProject = useSetProject()
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
      <SubmitButton />
    </Box>
  )
}
