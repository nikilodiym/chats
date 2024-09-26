import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ExchangeRate from "./pages/ExchangeRate";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import FirstInList from "./pages/FirstInList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="exchange-rate" element={<ExchangeRate />} />
          <Route path="product" element={<Product />} />
          <Route path="customers" element={<Customers />} />
          <Route path="first_in_list" element={<FirstInList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
