import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Transportation from "./pages/Transportation";
import Security from "./pages/Security";
import Tenders from "./pages/Tenders";
import Contact from "./pages/Contact";




function PlaceholderPage({ title }) {
  return (
    <main className="placeholder-page container">
      <span className="eyebrow">SDWABAZIKODE TRANSPORTATION & SECURITY</span>
      <h1>{title}</h1>
      <p>
        This page is part of our corporate website.
        We will add its full content in the next development steps.
      </p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route
          path="/transportation"
          element={<Transportation />}
        />

        
        <Route path="/security" element={<Security />} />

        <Route path="/tenders" element={<Tenders />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="*"
          element={<PlaceholderPage title="Page Not Found" />}
        />
      </Routes>

      <Footer />
    </>
  );
}