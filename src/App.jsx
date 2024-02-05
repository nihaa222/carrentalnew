import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Vehicle from "./components/Vehicle";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Vehicle />
      <About />
      <Testimonials />
    </>
  );
}

export default App;
