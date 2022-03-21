import React from 'react';
import {render} from 'react-dom';
import App from './routes/App'
import "./resources/css/index.css";

import {Auth0Provider} from '@auth0/auth0-react';
import {auth0config} from 'config';

render(
  <React.StrictMode>
    <Auth0Provider domain={auth0config.domain} clientId={auth0config.client_id} redirectUri={auth0config.redirect_uri}>
      <App/>
    </Auth0Provider>
  </React.StrictMode>
  , document.getElementById('root')
)
;
