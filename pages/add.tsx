import React, {FC} from "react"
import Head from "next/head"
import {Container, Typography} from "@material-ui/core"
import {useRouter} from "next/dist/client/router"
import {ShareForm} from "../src/components/ShareForm"
import {getParameter} from "../src/get-parameter"

const AddPage: FC = () => {
  const {query} = useRouter()
  const url = getParameter(query, "url") ?? getParameter(query, "text")
  const title = getParameter(query, "title")
  return (
    <>
      <Head>
        <title>Add - Scrapit</title>
        <link rel="icon" href="/logo.512x512.webp" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Container maxWidth="sm">
        <Typography variant="h1">Share</Typography>
        <ShareForm url={url ?? ""} title={title ?? ""} />
      </Container>
    </>
  )
}
export default AddPage
