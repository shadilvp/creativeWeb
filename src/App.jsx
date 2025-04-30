
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header&Footer/header";
import Footer from "./Header&Footer/footer";
import Home from "./pages/home";
import HomeHeader from "./Header&Footer/homeHeader";
import useIsMobile from "./utils/hooks/IsMobile";
import Shop from "./pages/shop";
import SpecificProduct from "./pages/specificProduct";
import Cart from "./pages/cart";
import { GlobalProvider } from "./Context/context";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();

  return (
    <>
      {isHomePage ? isMobile ? <Header /> : <HomeHeader /> : <Header />}

      {/* Routes */}
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<SpecificProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </GlobalProvider>

      <Footer />
    </>
  );
}

export default App;
