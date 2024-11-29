import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FooterNav from "./components/FooterNav/FooterNav";
import Header from "./components/Header/Header";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
