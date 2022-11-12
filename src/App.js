import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';

import './style.css';

export default function App() {
  const [fact, setFact] = useState({});
  const [active, setActive] = useState([true, false]);
  const divElement = useRef();

  const getNewFact = () => {
    const getFact = async () => {
      try {
        const response = await fetch('https://meowfacts.herokuapp.com/');
        const data = await response.json();
        setFact(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFact();
  };

  useEffect(() => {
    const getFact = async () => {
      try {
        const response = await fetch('https://meowfacts.herokuapp.com/');
        const data = await response.json();
        setFact(data);
        console.log();
      } catch (error) {
        console.log(error);
      }
    };
    getFact();
  }, []);

  // console.log(divElement.current);
  return (
    <div className="container" ref={divElement}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                fact={fact}
                getNewFact={getNewFact}
                active={active}
                setActive={setActive}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
