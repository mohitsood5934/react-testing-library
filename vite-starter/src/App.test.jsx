import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", { name: /learn react/i});
  expect(headingElement).toBeInTheDocument();
})

test("button starts with correct label and color", () => {
  const { container} = render(<App/>);
  // logRoles(container);
  const buttonElement = screen.getByRole("button", { name: /blue/i});
  expect(buttonElement).toHaveClass("red");
});

// test("button starts with correct text", () => {
//   render(<App/>);
//   const buttonElement = screen.getByRole("button");
//   expect(buttonElement).toHaveClass("red");
// });

test("button has correct color after click", () => {

});

test("button has correct text after click", () => {

});

test("button click flow", () => {

  // render app
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i});

  // click the button
  fireEvent.click(buttonElement);


  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);


  // check button color
  expect(buttonElement).toHaveClass("blue");


});



test('check box flow', () => {
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkBoxElement = screen.getByRole("checkbox", { name: /disable button/i});

  // check initial conditions

  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();

  fireEvent.click(checkBoxElement);

  expect(buttonElement).toBeDisabled();
  expect(checkBoxElement).toBeChecked();
  expect(buttonElement).toHaveClass('gray');

  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();
  
});
// logRoles : Helper function used to print out list of all implicit ARIA roles within a tree of DOM nodes
//  , each role containing a list of all of the nodes which match that role.This will be helpful for finding
// the ways to query  the DOM  under test with getByRole

describe('kebabCaseToTitleCase', () => {
  test("Works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  })

  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  })

  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  })
})