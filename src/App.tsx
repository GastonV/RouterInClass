import React from 'react';
import {
  Link, Navigate, Route, Routes,
} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Country from './Pages/Country';
import Description from './Pages/Description';
import './App.scss';

const App = () => (
  <div className="App">
    <nav>
      <ul className="right">
        <li>
          <Link to="home">Home</Link>
          {'  '}
          <Link to="country">Country</Link>
        </li>
        <li />
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="country" element={<Country />} />
      <Route path="description">
        <Route path=":id" element={<Description />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
