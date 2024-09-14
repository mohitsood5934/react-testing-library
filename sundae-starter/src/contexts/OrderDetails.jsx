import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";
import { formatCurrency } from "../utilities";

const OrderDetails = createContext();

// create custom hook to  check whether we are in provider

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be called from within an OrderDetailsProvider"
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    const newOptionCounts = {...optionCounts};
    newOptionCounts[optionType][itemName] = newItemCount;
    setOptionCounts(newOptionCounts);
  }

  function resetOrder() {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  }

  // utility function to derive totals from optionCounts state value

  function calculateTotal(optionType) {
    // get an array of counts for the option type e.g [1,2]

    const countsArray = Object.values(optionCounts[optionType]);

    // total the values in the array of counts

    const totalCount = countsArray.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalCount * pricePerItem[optionType];
  }

  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  }
  let grandTotal = totals.scoops + totals.toppings;
  grandTotal = formatCurrency(grandTotal);
  const value = { optionCounts, calculateTotal, totals, updateItemCount, resetOrder, grandTotal };
  return (
    <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>
  );
}
