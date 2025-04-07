import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Shop } from "./pages/Shop"
import { Contact } from "./pages/Contact"
import { BuyShop } from "./pages/BuyShop"
import { ProductsProvider } from "./context/ProductsProvider"
import { FiltersProvider } from "./context/FiltersProvider"
import { CarritoProvider } from "./context/CarritoProvider"
import { Footer } from "./components/Footer"


export const App = () => {
  return (
    <ProductsProvider>
      <FiltersProvider>
        <CarritoProvider>
      <Navbar></Navbar>
      
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="buyshop" element={<BuyShop />}></Route>
        </Routes>
       <Footer></Footer>
      </CarritoProvider>
      </FiltersProvider>
    </ProductsProvider>

  )
}


