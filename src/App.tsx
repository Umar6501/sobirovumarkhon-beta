import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Hero from "./sections/hero/Hero";
import Load from "./components/loader/Load";
const Header = lazy(() => import("./components/header/Header"));
// const Load = lazy(() => import("./components/loader/Load"));
// const Load = lazy(() => import("./components/loader/Load"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Load />}>
        {/* fallback={<load />} */}
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
