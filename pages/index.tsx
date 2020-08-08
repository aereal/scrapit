import React, {FC} from "react"
import Head from "next/head"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const Home: FC = () => (
  <>
    <Head>
      <title>Scrapit</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container maxWidth="sm">
      <Typography>Scrapit</Typography>
    </Container>
  </>
)
export default Home
