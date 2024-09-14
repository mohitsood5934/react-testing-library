import SummaryForm from "./pages/summary/SummaryForm";
import OrderEntry from "./pages/entry/OrderEntry";
import Container from "react-bootstrap/container";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    // <div>
    //   <h1>Sundaes on Demand</h1>
    //   <SummaryForm />
    //   <OrderEntry />
    // </div>
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
