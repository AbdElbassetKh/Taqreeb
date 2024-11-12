import React from 'react';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedBooks />
      <Categories />
    </>
  );
};

export default Home;