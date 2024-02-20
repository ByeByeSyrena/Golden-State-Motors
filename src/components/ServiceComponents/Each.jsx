import React from 'react';

export const Each = ({ render, of }) => {
  return (
    <>{Array.isArray(of) && of.map((item, index) => render(item, index))}</>
  );
};
