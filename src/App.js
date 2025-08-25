import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HomePage from './pages/home/home';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Page404 from './components/shared/404/404';
import NavHeader from './components/header/navHeader';
import FooterContainer from './components/footer/footercontainer';
import { Kanchi } from './pages/kanchi/kanchi';
import { Padappai } from './pages/padappai/padappai';
import PrivacyPolicy from './components/footer/privacy';
import { Sholavaram } from './pages/sholavaram/sholavaram';
import { ContactUS } from './pages/contactus/contactus';
import AboutUs from './pages/aboutus/aboutus';
import BlogPage from './pages/blogs/blogs';

function App() {
  return (
    <BrowserRouter>
      <div>     
        <NavHeader/>   
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/kanchipuram" element={<Kanchi />} />
          <Route path="/padappai" element={<Padappai />} />
          <Route path="/redhills" element={<Sholavaram />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <FooterContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
