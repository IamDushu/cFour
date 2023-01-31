import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Game from "./pages/game/Game"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
