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
import SizeGuide from "./components/Products/SizeGuide/SizeGuide";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import Cart from "./components/Products/Cart/Cart";
import Footer from "./components/Foooter/Footer";
import OrderHistory from "./components/Products/OrderHistory/OrderHistory";
import Search from "./components/Products/Search/Search";
import {SearchTermProvider} from "./components/Products/Search/SearchTermContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import MyInformation from "./components/MyInformation/MyInformation";

function App() {
    return (
        <BrowserRouter>

            <SearchTermProvider>
            <HeaderSalesPage></HeaderSalesPage>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/all-products" element={<AllProducts></AllProducts>}></Route>
                <Route path="/guide" element={<SizeGuide></SizeGuide>}></Route>
                <Route path="/login" element={<SignIn></SignIn>}> </Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/detail/:id" element={<ProductDetail></ProductDetail>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/history" element={<OrderHistory></OrderHistory>}></Route>
                <Route path="/search" element={<Search></Search>}></Route>
                <Route path="/myinfo" element={<MyInformation></MyInformation>}></Route>
            </Routes>

            <Footer></Footer>

            </SearchTermProvider>
            <ToastContainer/>
        </BrowserRouter>

    );
}

export default App;
