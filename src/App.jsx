import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FooterNav from './components/FooterNav/FooterNav';
import './app.scss';
import JourneyDetails from './pages/JourneyDetails/JourneyDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey-details" element={<JourneyDetails />} />
      </Routes>
      {/* <FooterNav /> */}
    </BrowserRouter>
  );
}

export default App;
