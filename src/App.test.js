import React from "react";
// not using React Testing Library, using Enzyme
// import { render, screen } from '@testing-library/react';
import App from "./App";

// Enzyme
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders a non-empty component without crashing", () => {
    // Base React Testing code boilerplate
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
    const wrapper = shallow(<App />);
    // Jest
    expect(wrapper.exists()).toBe(true);
});
