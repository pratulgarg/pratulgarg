import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Membership from "./components/Membership/membership";
import OurStory from "./components/OurStory";
import Write from "./components/Write";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route
                  path="/" element={<HomePage  />}
              />
              <Route path="/membership" element={<Membership  />} />

              <Route path="/ourstory" element={<OurStory  />} />


              <Route path="/write" element={<Write />} />


          </Routes>
      </BrowserRouter>
  );
}

export default App;
