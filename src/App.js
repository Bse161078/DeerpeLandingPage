import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Features from './components/features/Features';
import About from './components/about/About';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Blog from './components/Pages/Blog/Blog';
import Download from './components/Pages/Download/Download';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route  exact path="/features" element={<Features/>}/>
        <Route  exact path="/about" element={<About/>}/>
        <Route  exact path="/contactUs" element={<ContactUs/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/download" element={<Download/>}/>

        
       
      </Routes>
      </Router>

    </div>
  );
}

export default App;
