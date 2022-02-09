import React from 'react';


export const ButtonUI = ({text, OnClick}) => {
  return (
  <div>
      <button onClick={OnClick}>{text}</button>
  </div>
)
};
