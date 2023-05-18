import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notifications", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });
  it("should render three list items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(3);
  });
  it('should render text "Here is the list of notifications" ', () => {
    const wrapper = shallow(<Notifications />);
    // wrapper.update();
    // expect(wrapper.find("p").text()).toEqual("Here is the list of notifications" );
    expect(wrapper.contains('"Here is the list of notifications"')).toBe(true);
  });
});
