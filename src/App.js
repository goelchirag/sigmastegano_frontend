
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<Upload />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
