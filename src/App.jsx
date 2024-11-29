import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PopUp2Page from "./pages/PopUp2page/PopUp2Page.jsx";
import FooterNav from "./components/FooterNav/FooterNav";
import Header from "./components/Header/Header";
import Send from "./pages/Send/Send";
import JourneyDetails from "./pages/JourneyDetails/JourneyDetails";
import "./app.scss";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/send" element={<Send />} />
        <Route path="/journey-details" element={<JourneyDetails />} />
        <Route path="/popup2" element={<PopUp2Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
