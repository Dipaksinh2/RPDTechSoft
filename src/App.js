import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Service/Service";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
}

export default App;
