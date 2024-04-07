import "bootstrap/dist/css/bootstrap.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HeaderSalesPage from "./components/Header/HeaderSalesPage";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderSalesPage></HeaderSalesPage>} ></Route>
      <Route path="/homepage" element={<HomePage></HomePage>} ></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
