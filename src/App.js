import "./App.css";
import "./index.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import DestinationPage from "./pages/DestinationPage";

function App() {
  return (
    <div className="bg-midnight">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/destination/1" element={<DestinationPage />} />
      </Routes>
    </div>
  );
}

export default App;
