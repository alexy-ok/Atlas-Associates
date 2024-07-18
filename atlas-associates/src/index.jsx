import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectPage from "./components/ProjectPage"
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import "./styles/index.css";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/residential" element={<Projects type='residential' name='Residential'/>} />
          <Route path="/residential/:id" element={<ProjectPage />}/>
          <Route path="/commercial" element={<Projects type ='commercial' name='Commercial'/>} />
          <Route path="/commercial/:id" element={<ProjectPage />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);