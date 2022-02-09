import React from 'react';
import Sea from '../../../Images/SeaOfThieves.jfif'


export const Image = ({style}) => {
  return (
  <div>
      <img style={style} id='imgGame' src={Sea} alt="Sea of Thieves" />
  </div>
)
};
