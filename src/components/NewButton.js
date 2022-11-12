import React from 'react';

const Title = ({ getNewFact }) => {
  return <button onClick={getNewFact}>new cat fact</button>;
};

export default Title;
