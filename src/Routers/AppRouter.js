import { useRedirect, useRoutes, navigate, usePath } from "raviger";
import React, { useState, useEffect } from "react";

import FaceApi from '../components/Face/Face'
const routes = {
    '/': () => <FaceApi />,
    // '/register': () => <Register />,
    
  }


  const AppRouter = () => {
    const content = useRoutes(routes);
    return (
      <>
          {content}
      </>
    );
  };
  
  export default AppRouter;