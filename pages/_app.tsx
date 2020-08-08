import React, {FC} from "react"
import {AppProps} from "next/app"
import {CssBaseline} from "@material-ui/core"

const MyApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
