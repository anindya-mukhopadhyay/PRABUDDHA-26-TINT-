import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Merch from "./pages/Merch"
import Proshows from "./pages/Proshows"
import Accommodation from "./pages/Accommodation"
import Competitions from "./pages/Competitions"
import Sponsors from "./pages/Sponsors"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/proshows" element={<Proshows />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </>
  )
}
