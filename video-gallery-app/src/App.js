import Footer from "./components/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Video from "./pages/Video"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
