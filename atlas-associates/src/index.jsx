import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectPage from "./components/ProjectPage"
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import "./styles/index.css";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
// index.js
import 'normalize.css';



export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header />
        <div className="main">
          <Routes>
          
            <Route index element={<Home />} />
            <Route path="/residential" element={<Projects type='residential' name='Residential'/>} />
            <Route path="/residential/:id" element={<ProjectPage />}/>
            <Route path="/commercial" element={<Projects type ='commercial' name='Commercial'/>} />
            <Route path="/commercial/:id" element={<ProjectPage />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
      
        
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);