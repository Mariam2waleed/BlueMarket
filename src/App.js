import "./App.css"; 
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LogIn from "./pages/LogIn";
import Us from "./pages/Us";
import Vegetables from "./pages/Vegetables";
import ForgotPassword from "./pages/ForgotPassword";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Us" element={<Us />} />
        <Route path="/Vegetables" element={<Vegetables />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;