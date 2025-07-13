import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import CssBaseline from "@mui/material/CssBaseline"
import {Provider} from "jotai"
import type {Metadata} from "next"
import {FC, ReactNode} from "react"
import {description, title} from "../metadata"

interface LayoutProps {
  readonly children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => (
  <>
    <CssBaseline />
    <html>
      <body>
        <Provider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  </>
)

const images = ["/icon.512x512.png"]

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    description,
    images,
  },
  twitter: {
    title,
    description,
    images,
    creator: "@aereal",
    site: "@aereal",
  },
  manifest: "/manifest.json",
}

export default Layout
