import React from "react"; //eslint-disable-line
import { shallow } from "enzyme"

import Boilerplate from "components/boilerplate"

describe("<Boilerplate />", () => {
  it("renders some divs", () => {
    const mockFunction = () => {}
    const wrapper = shallow(<Boilerplate addBoilerplateString={mockFunction}/>)
    expect(wrapper.find("div").length).toBe(1)
  })
})