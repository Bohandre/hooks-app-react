import React from 'react';
// import { memo } from "react";

export const Small = React.memo( ( { value } ) => {

    console.log(':(');

  return (
    <small>{ value }</small>
  )
} )
