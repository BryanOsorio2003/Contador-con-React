import React from 'react';
import { ContainerImage } from '../../Layouts/Container Image/ContainerImage';
// import { ContainerButtons } from '../../Layouts/ContainerButtons/ContainerButtons';

import { ContainerTittles } from '../../Layouts/ContainerTittles/ContainerTittles';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';



export const Main = () => {
  return (<div>
    <ContainerTittles />
    <ContainerImage />
    <ButtonUI />
  </div>
  )
};
