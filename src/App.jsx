import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Merch from "./pages/Merch"
import Proshows from "./pages/Proshows"
import Accommodation from "./pages/Accommodation"
import Competitions from "./pages/Competitions"
import Sponsors from "./pages/Sponsors"
import Hardware from "./pages/competitions_menu/Hardware"
import Software from "./pages/competitions_menu/Software"
import Quiz from "./pages/competitions_menu/Quiz"
import Business from "./pages/competitions_menu/Business"
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
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/software" element={<Software />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </>
  )
}
