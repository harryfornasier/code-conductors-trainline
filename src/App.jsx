import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import FooterNav from './components/FooterNav/FooterNav';
import Header from './components/Header/Header';
import JourneyDetails from './pages/JourneyDetails/JourneyDetails';
import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey-details" element={<JourneyDetails />} />
      </Routes>
      {/* <FooterNav /> */}
    </BrowserRouter>
  );
}

export default App;
