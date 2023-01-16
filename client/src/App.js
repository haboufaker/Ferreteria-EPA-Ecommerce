import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/global/Navbar";
import ItemDetailContainer from "./components/itemDetails/ItemDetailContainer";
import CartMenu from "./components/global/CartMenu";
import Checkout from "./components/checkout/Checkout";
import Confirmation from "./components/checkout/Confirmation";
import Footer from "./components/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<div>Error</div>} />
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetailContainer />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
