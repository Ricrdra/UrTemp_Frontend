import React from 'react';

import {useAuth0} from "@auth0/auth0-react";
import {log} from "util";

const Login = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    <div className='p-4 bg-blue-600 text-center shadow-2xl'>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Login;
