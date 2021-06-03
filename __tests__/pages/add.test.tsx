import React from "react"
import {NextRouter} from "next/router"
import {RouterContext} from "next/dist/next-server/lib/router-context"
import {mount} from "enzyme"
import AddPage from "../../pages/add"

describe("pages.add", () => {
  test("no URL", () => {
    const wrapper = mount(
      withNextRouter(buildRouter({pathname: "/add"}), <AddPage />),
    )
    expect(wrapper.exists("form")).toBe(false)
  })

  test("with URL and title", () => {
    const wrapper = mount(
      withNextRouter(
        buildRouter({
          pathname: "/add",
          query: {url: "http://target.example/", title: "example web site"},
        }),
        <AddPage />,
      ),
    )
    expect(wrapper.exists("form")).toBe(true)
  })
})

const noopFn = () => null

// eslint-disable-next-line @typescript-eslint/require-await
const asyncNoop = async () => true

const buildRouter = (args: Partial<NextRouter>): NextRouter => ({
  route: "",
  pathname: "/",
  query: {},
  asPath: "/",
  basePath: "",
  push: asyncNoop,
  replace: asyncNoop,
  reload: noopFn,
  back: noopFn,
  // eslint-disable-next-line @typescript-eslint/require-await
  prefetch: async () => void 0,
  isFallback: false,
  beforePopState: noopFn,
  events: {
    on: noopFn,
    off: noopFn,
    emit: noopFn,
  },
  ...args,
})

const withNextRouter = (
  router: NextRouter,
  children: React.ReactElement,
): React.ReactElement => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
)
