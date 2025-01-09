import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HadelineCards from './Components/HadelineCards';
import Food from './Components/Food';
import Catagory from './Components/Catagory';

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HadelineCards/>
      <Food/>
      <Catagory/>
    </>
  );
}

export default App;
