import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import {Provider} from 'react-redux';
import logger from "redux-logger"
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
root.render(
  <React.StrictMode>
   <Provider store={store}>
<App/>

  </Provider> 
   
  </React.StrictMode>
);

