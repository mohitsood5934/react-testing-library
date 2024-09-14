import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import OrderEntry from "../OrderEntry";

test("update scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);
  // make sure total starts at $0.00

  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoop to 1, and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings total when topping is selected/unselected", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  // make sure total starts at 0.00
  const topicsSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(topicsSubtotal).toHaveTextContent("0.00");

  // select topping and check total
  const cherryCheckBox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  await user.click(cherryCheckBox);

  expect(topicsSubtotal).toHaveTextContent("1.50");

  // select another topping and check total
  const hotFudgeCheckBox = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });
  await user.click(hotFudgeCheckBox);

  expect(topicsSubtotal).toHaveTextContent("3.00");

  // deselect prev topping and check total
  await user.click(cherryCheckBox);
  expect(topicsSubtotal).toHaveTextContent("1.50");
});

describe("grand total", async () => {
  const user = userEvent.setup();
  test("grand total starts at $0.00", () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByText("Grand Total: $", { exact: false });
    expect(grandTotal).toHaveTextContent("0.00");
  });

  test("grand total updates properly if scoop is added first", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByText("Grand Total: $", { exact: false });
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1");
    expect(grandTotal).toHaveTextContent("2.00");
  });

  test("grand total updates properly if topping is added first", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByText("Grand Total: $", { exact: false });
    const cherryCheckBox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    await user.click(cherryCheckBox);
    expect(grandTotal).toHaveTextContent("1.50");
  });

  test("grand total updates properly if item is removed", async () => {
    render(<OrderEntry />);
    const grandTotal = screen.getByText("Grand Total: $", { exact: false });
    const vanillaInput = await screen.findByRole("spinbutton", {
      name: "Vanilla",
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1");

    const cherryCheckBox = await screen.findByRole("checkbox", {
      name: "Cherries",
    });
    await user.click(cherryCheckBox);
    expect(grandTotal).toHaveTextContent("3.50");
  });
});
