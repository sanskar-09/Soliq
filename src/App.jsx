import Footer from "./components/Footer";
import Login from "./components/Login";
import Terms from "./components/Terms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Policy from "./components/policy";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/privacy-policy" element={<Policy />}></Route>
          <Route path="/terms-conditions" element={<Terms />}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
