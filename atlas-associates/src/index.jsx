import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
 import BellevueModern from "./pages/BellevueModern";
import Contact from "./pages/Contact";
import "./styles/index.css";
import Residential from "./pages/Residential";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/b" element={<BellevueModern />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<NoPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);