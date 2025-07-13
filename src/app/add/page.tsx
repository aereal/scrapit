"use client"

import Container from "@mui/material/Container"
import {useSearchParams} from "next/navigation"
import {Suspense} from "react"
import {ShareForm} from "../../components/share-form"

const Main = () => {
  const params = useSearchParams()
  const url = params?.get("url") ?? ""
  const title = params?.get("title") ?? ""
  return <ShareForm url={url} title={title} />
}

const Add = () => (
  <Container maxWidth="sm">
    <Suspense>
      <Main />
    </Suspense>
  </Container>
)

export default Add
