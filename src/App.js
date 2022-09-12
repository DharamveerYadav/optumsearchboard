import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

import NavigationItems from './NavigationItems/NavigationItems';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Results from './Results/Results';
import NavBar from './NavBar/NavBar';

export const NavigationItemsArray = [
  "Home",
  "Menu Item A",
  "Menu Item B",
  "Menu Item C",
  "Menu Item D",
  "Menu Item E"
];



function App() {
  const [crumbs, setCrumbs] = useState(['Home', 'Search Results']);

const selected = crumb => {
  console.log(crumb);
}
  return (
    <div className="App">
     <Header />
     <BrowserRouter>
     <NavBar />
     </BrowserRouter>
     {/* <nav style={{
       height: '4rem'
     }}
     ><NavigationItems items={NavigationItemsArray}></NavigationItems>
     </nav> */}
     {/* <div className="container2 section-container">
     <Breadcrumb crumbs={ crumbs } selected={ selected }  />
     <span className="fs-1 fw-bold mx-4">Search Results</span>
     <Results />
     </div>*/}
    </div> 
  );
}

export default App;
