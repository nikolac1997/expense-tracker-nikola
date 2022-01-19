import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'

import App from './App'
import './index.css'

ReactDOM.render(
  <SpeechProvider appId="4a3ce3cb-4b7f-4a9b-b1a6-b89deda4cd36" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
  , document.getElementById("root"))