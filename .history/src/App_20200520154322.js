import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style.js';
import Home from './pages/home';
import Detail from './pages/detail';
import Header from './common/header';
import store from './store';

function App() {   
  return (
      <Provider store={store}>
        <Globalstyle/>
        <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
