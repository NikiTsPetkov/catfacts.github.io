import React from 'react';
import Title from './Title';
import Fact from './Fact';
import NewButton from './NewButton';

const Home = ({ fact, getNewFact }) => {
  return (
    <>
      <Title />
      {fact ? <Fact fact={fact} /> : 'Loading..'}
      <NewButton getNewFact={getNewFact} />
    </>
  );
};

export default Home;
