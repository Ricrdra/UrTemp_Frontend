import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "@components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
