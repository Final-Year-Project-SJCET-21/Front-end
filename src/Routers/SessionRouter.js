import { useRedirect, useRoutes, navigate, usePath } from "raviger";
import React, { useState, useEffect } from "react";

import Login from '../views/auth/Login';
import Register from '../views/auth/Register';

const routes = {
    '/': () => <Login />,
    '/register': () => <Register />,
    
  }


  const SessionRouter = () => {
    const content = useRoutes(routes);
    return (
      <>
          {content}
      </>
    );
  };
  
  export default SessionRouter;