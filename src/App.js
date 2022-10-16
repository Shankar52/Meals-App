import React from 'react'
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Categories from './Components/Categories/Categories'
import Randommeal from './Components/RandomMeal/Randommeal'
import HomePage from './Components/HomePage/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/random" element={<Randommeal />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
