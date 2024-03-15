import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./component/shared/Layout";
import Dashboard from "./component/shared/Dashboard";
import Product from "./component/shared/Product";
import Orders from "./component/shared/Orders";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="orders" element={<Orders/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
