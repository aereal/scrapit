import Box from "@mui/material/Box"
import {FC, FormEventHandler} from "react"
import {useProjectValue, useTitleValue, useURLValue} from "../../atoms"
import {formatScrapboxNotation} from "../../format-scrapbox-notation"
import {ProjectInput} from "./project-input"
import {SubmitButton} from "./submit-button"
import {TitleInput} from "./title-input"
import {URLInput} from "./url-input"

export const ShareForm: FC = () => {
  const url = useURLValue()
  const title = useTitleValue()
  const project = useProjectValue()
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
      <URLInput />
      <TitleInput />
      <ProjectInput />
      <SubmitButton />
    </Box>
  )
}
