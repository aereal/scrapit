import TextField from "@mui/material/TextField"
import {ChangeEventHandler} from "react"
import {useProjectValue, useSetProject} from "../../atoms"

export const ProjectInput = () => {
  const project = useProjectValue()
  const setProject = useSetProject()
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setProject(e.target.value)
  }
  return (
    <TextField
      name="scrapbox_project"
      label="Scrapbox Project"
      defaultValue={project}
      onChange={handleChange}
      fullWidth
      required
    />
  )
}
