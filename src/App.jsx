import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home.jsx";
import { Courses } from "./pages/Courses.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Franchises } from "./pages/Franchises.jsx";
import { LearnAbacus } from "./pages/LearnAbacus.jsx";
import { Privacy } from "./pages/Privacy.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn-abacus" element={<LearnAbacus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchises" element={<Franchises />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
