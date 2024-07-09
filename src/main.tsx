import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { AppRouter } from "./Routes/Routes";


function App() {
  return (
    <div className="">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/inicio" element={<main />} />
            <Route path="/*" element={<AppRouter />} /> {/* Handle other routes */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
