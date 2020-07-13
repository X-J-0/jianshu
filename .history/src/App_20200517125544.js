import React from 'react';
import { Provider } from 'react-redux';
import { BrowserHistory, Router } from 'react-router-dom';
import { Globalstyle } from './style.js';
import Header from './common/header';
import store from './store';


function App() {
  return (
    <div className="dell">
      <Provider store={store}>
        <Globalstyle/>
        <Header/>
        <BrowserHistory>
          <Router path='/'  render={()=><div>home</div>}></Router>
          <Router path='/detail'  render={()=><div>detail</div>}></Router>
        </BrowserHistory>
      </Provider>
    </div>
  );
}

export default App;
