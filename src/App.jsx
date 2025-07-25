import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./AuthProvider";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
