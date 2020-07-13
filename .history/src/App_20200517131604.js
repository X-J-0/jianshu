import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { Globalstyle } from './style.js';
import Header from './common/header';
import store from './store';


function App() {
  return (
      <Provider store={store}>
        <div>
        <Globalstyle/>
        <Header/>
        <BrowserRouter>
        <div>
          <Router path='/' exact render={()=><div>home</div>}></Router>
          <Router path='/detail' exact render={()=><div>detail</div>}></Router>
        </div>
        </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
