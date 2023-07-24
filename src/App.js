import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Login, SingleBlog} from "./pages";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/blog/:slug" element = {<SingleBlog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
