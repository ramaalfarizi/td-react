import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Gallery from "./pages/Gallery"
import News from "./pages/News"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Donation from "./pages/Donation"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<About />} />
        <Route path="/g" element={<Gallery />} />
        <Route path="/d" element={<Donation />} />
        <Route path="/n" element={<News />} />
        <Route path="/f" element={<Faq />} />
        <Route path="/c" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
