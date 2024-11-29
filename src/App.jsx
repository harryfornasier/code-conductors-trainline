import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import PopUp2Page from "./pages/PopUp2page/PopUp2Page.jsx";
import FooterNav from "./components/FooterNav/FooterNav";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popup2" element={<PopUp2Page />} />
      </Routes>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
