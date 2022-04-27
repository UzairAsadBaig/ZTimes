import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import Cook from 'js-cookie';

const ProtectedRoute=( {
  redirectPath='/admin/login',
  children
} ) => {

  const jwt=Cook.get( 'JWT' );

  if ( !jwt ) {
    return <Navigate to={redirectPath} replace />;
  }
  

  return children;
};


export default ProtectedRoute;