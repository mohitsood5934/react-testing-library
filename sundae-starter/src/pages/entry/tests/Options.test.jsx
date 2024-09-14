import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  // const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  /* When you are waiting for something to appear  asynchronously on the page , you must use await findBy */
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);

  // array & objects use toEqual matcher not toBe
});

test("displays image for each toping option from server", async () => {
  render(<Options optionType="topings" />);

  // find images
  // const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  /* When you are waiting for something to appear  asynchronously on the page , you must use await findBy */
  const scoopImages = await screen.findAllByRole("img", { name: /toping$/i });
  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Cherries toping", "M&Ms toping", "Hot fudge toping"]);

  // array & objects use toEqual matcher not toBe
});


// await findBy

/* When you are waiting for something to appear  asynchronously on the page , you must use await findBy */
