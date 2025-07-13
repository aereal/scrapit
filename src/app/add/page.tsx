"use client"

import Container from "@mui/material/Container"
import {useSearchParams} from "next/navigation"
import {Suspense} from "react"
import {useSetTitle, useSetURL} from "../../atoms"
import {ShareForm} from "../../components/share-form"

const Main = () => {
  const params = useSearchParams()
  useSetURL()(() => params.get("url") ?? "")
  useSetTitle()(() => params?.get("title") ?? "")
  return <ShareForm />
}

const Add = () => (
  <Container maxWidth="sm">
    <Suspense>
      <Main />
    </Suspense>
  </Container>
)

export default Add
