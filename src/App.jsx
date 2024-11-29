import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import FooterNav from "./components/FooterNav/FooterNav";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <FooterNav /> */}
    </BrowserRouter>
  );
}

export default App;
