import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  it("should render without crashing", () => {
    shallow(<App />);
  });

  it("should render div with App-header class", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(l);
  });
  it("should render div with App-body class", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-body")).toHaveLength(1);
  });
  it("should render div with App-footer class", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("div.App-footer")).toHaveLength(1);
  });
});
