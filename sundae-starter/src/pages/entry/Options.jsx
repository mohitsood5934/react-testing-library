import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => {
        if (response.data) {
          setItems(response.data);
        }
      })
      .catch((err) => {
        console.log(`Error occurred while fetching options list - ${err}`);
      });
  }, [optionType]);

  //   replace null with topping option when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}
