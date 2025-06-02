import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <main className="flex-grow">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
