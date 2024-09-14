import {
  render,
  screen,
  // fireEvent
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

// userEvent vs fireEvent

test("initial conditions", () => {
  // render app
  render(<SummaryForm />);

  // get checkbox element
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  // checkbox should be unchecked by default & btn should be disabled
  expect(checkBox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

// test("checkbox enables button on first click & disables on second click", () => {
//   render(<SummaryForm />);

//   // get checkbox element
//   const checkBox = screen.getByRole("checkbox", {
//     name: /terms and conditions/i,
//   });
//   const confirmButton = screen.getByRole("button", { name: /confirm order/i });

//   fireEvent.click(checkBox);
//   expect(confirmButton).toBeEnabled();

//   fireEvent.click(checkBox);
//   expect(confirmButton).toBeDisabled();
// });

test("checkbox enables button on first click & disables on second click", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  // get checkbox element
  const checkBox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkBox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkBox);
  expect(confirmButton).toBeDisabled();
});

// test("popup responds to hover", async () => {
//   const user = userEvent.setup();
//   render(<SummaryForm />);
//   // popover starts out hidden
//   const nullPopover = screen.queryByText(
//     /no ice cream will actually be delivered/i
//   );
//   expect(nullPopover).not.toBeInTheDocument();

//   // popover appears on mouseover of checkbox label
//   const termsAndConditions = screen.getByText(/terms and conditions/i);
//   await user.hover(termsAndConditions);

//   const popover = screen.queryByText(
//     /No ice cream will actually be delivered/i
//   );
//   expect(popover).toBeInTheDocument();

//   // popover disappears when we mouse out
//   await user.unhover(termsAndConditions);
//   expect(popover).not.toBeInTheDocument();
// });
