import "bootstrap/dist/css/bootstrap.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HeaderSalesPage from "./components/Header/HeaderSalesPage";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import AllProducts from "./components/AllProducts/AllProducts";
import SizeGuide from "./components/SizeGuide/SizeGuide";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderSalesPage></HeaderSalesPage>} ></Route>
      <Route path="/homepage" element={<HomePage></HomePage>} ></Route>
      <Route path="/all-products" element={<AllProducts></AllProducts>} ></Route>
      <Route path="/guide" element={<SizeGuide></SizeGuide>}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
