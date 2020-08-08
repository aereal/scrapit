import React from "react"
import Document, {
  Html,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
  Head,
} from "next/document"
import {ServerStyleSheets} from "@material-ui/core"

export default class MyDocument extends Document {
  static getInitialProps = async (
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> => {
    const sheets = new ServerStyleSheets()
    const {renderPage: origRender} = ctx
    ctx.renderPage = () =>
      origRender({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
