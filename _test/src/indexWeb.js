// Info: Main Entry File for Web Platforms
'use-strict'

// React (Private Scope)
import React from 'react';

// React Dom (Private Scope)
import ReactDOM from 'react-dom/client';

// Load Project Dependencies and Configuration
const [Lib, Config] = require('./loader')('BROWSER');


// Initialize project root
const Root = require('./root')(Lib, Config);

import '../web/public/css/style.css';


// Initialize DOM node and create Web app root
ReactDOM.createRoot( document.getElementById("root") ).render(
  <Root />
)
