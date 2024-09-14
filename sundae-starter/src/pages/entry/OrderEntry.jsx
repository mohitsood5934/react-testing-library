import { useOrderDetails } from "../../contexts/OrderDetails";
import Options from "./Options";

export default function OrderEntry() {
  const { grandTotal } = useOrderDetails();
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {grandTotal}</h2>
      <button>Order Sundae</button>
    </div>
  );
}