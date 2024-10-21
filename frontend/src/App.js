import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetails from './pages/Productdetails';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';



function App() {
  const [cardetails, setCardetails] = useState([]);
  return (
    <div className="App">

      <Router>
        <div>
          <ToastContainer />
          <Header cardetails={cardetails} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Home />} />
            <Route path="product/:id" element={<Productdetails cardetails={cardetails} setCardetails={setCardetails} />} />
            <Route path="cart" element={<Cart cardetails={cardetails} setCardetails={setCardetails} />} />
          </Routes>
        </div>
        <Footer />
      </Router>

    </div>
  )
}

export default App;