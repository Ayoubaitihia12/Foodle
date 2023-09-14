import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ShoppingCartProvider from './Context/ShoppingCart'
import Login from "./components/Login";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="menu" element={<Menu/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="login" element={<Login/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
