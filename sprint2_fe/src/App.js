import "bootstrap/dist/css/bootstrap.css";
import {
    Routes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import HeaderSalesPage from "./components/Header/HeaderSalesPage";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import SizeGuide from "./components/SizeGuide/SizeGuide";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";





function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeaderSalesPage></HeaderSalesPage>}></Route>
                <Route path="/homepage" element={<HomePage></HomePage>}></Route>
                <Route path="/all-products" element={<AllProducts></AllProducts>}></Route>
                <Route path="/guide" element={<SizeGuide></SizeGuide>}></Route>
                <Route path="/login" element={<SignIn></SignIn>}> </Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/detail" element={<ProductDetail></ProductDetail>}></Route>



            </Routes>
        </BrowserRouter>
    );
}

export default App;
