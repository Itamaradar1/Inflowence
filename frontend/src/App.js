import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

import HomePage from './pages/homepage';
import Login from './pages/login';
import CompanyPage from './pages/company';
import AboutPage from './pages/about';
import InfluencerPage from './pages/influencer';
import BookADemo from './pages/bookADemo';
import BookADemoThankYou from './pages/bookADemoThankYou';
import Register from './pages/register';
import ContactPage from './pages/contact/contact_page';



function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/profile" element={<InfluencerPage />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/company" element={<CompanyPage />}/>
      <Route path="/company/campaign/:id" element={<CompanyPage />}/>
      <Route path="/book_a_demo" element={<BookADemo/>}/>
      <Route path="/thank_you" element={<BookADemoThankYou/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Contact" element={<ContactPage />}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
