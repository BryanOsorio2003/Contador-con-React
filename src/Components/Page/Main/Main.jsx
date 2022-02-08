import React from 'react';
import { ContainerImage } from '../../Layouts/Container Image/ContainerImage';
import { ContainerButtons } from '../../Layouts/ContainerButtons/ContainerButtons';
import { ContainerTittles } from '../../Layouts/ContainerTittles/ContainerTittles';



export const Main = () => {
  return (<div>
    <ContainerTittles />
    <ContainerImage />
    <ContainerButtons />
  </div>
  )
};
