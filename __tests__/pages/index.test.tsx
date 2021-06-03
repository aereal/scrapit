import React from "react"
import {shallow} from "enzyme"
import IndexPage from "../../pages/index"

describe("pages.index", () => {
  test("ok", () => {
    const wrapper = shallow(<IndexPage />)
    expect(wrapper.find("title").map((el) => el.text())).toStrictEqual([
      "Kiritoru",
    ])
  })
})
