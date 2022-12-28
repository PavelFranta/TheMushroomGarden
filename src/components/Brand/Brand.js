import React from 'react';
import { navigate } from 'gatsby';

const Brand = (props) => {
  return (
    <div
      role={'presentation'}
      className="text-center"
      onClick={() => navigate('/')}
    >
      <span className="text-4xl">The Mushroom Garden</span>
    </div>
  );
};

export default Brand;
