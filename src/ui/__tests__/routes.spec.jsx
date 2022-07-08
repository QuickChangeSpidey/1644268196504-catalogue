import React from "react";
import { MemoryRouter } from "react-router";

import { mount } from "enzyme";
import App from "../components/App";
import Home from "../components/Home";
import ButtonLink from "@tds/core-button-link";

describe("Application routes", () => {
  it("should render a Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });
});

describe("Render Component Test ", () => {
  it("should render two ButtonLink components", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(ButtonLink)).toHaveLength(2);
  });
});
