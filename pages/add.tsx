import {ParsedUrlQuery} from "querystring"
import React, {FC} from "react"
import Head from "next/head"
import {Container, Typography} from "@material-ui/core"
import {useRouter} from "next/dist/client/router"
import {ShareForm} from "../src/components/ShareForm"
import {getParameter} from "../src/get-parameter"

const getURL = (qs: ParsedUrlQuery): string | undefined =>
  getParameter(qs, "url") ?? getParameter(qs, "text")

const AddPage: FC = () => {
  const router = useRouter()
  const {query} = router
  const url = getURL(query)
  const title = getParameter(query, "title")
  return (
    <>
      <Head>
        <title>Add - Kiritoru</title>
        <link rel="icon" href="/logo.512x512.webp" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Container maxWidth="sm">
        <Typography variant="h1">Share</Typography>
        {url !== undefined && title !== undefined ? (
          <ShareForm url={url} title={title} />
        ) : null}
      </Container>
    </>
  )
}
export default AddPage
