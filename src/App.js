import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";

import "./styles.css";
import { CVPReview } from "./components/CVPreview/CVPreview";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<CVPReview />} />
      </Routes>
    </div>
  );
}

export default App;
