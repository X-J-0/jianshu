import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style.js';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Header from './common/header';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

function App() {   
  return (
      <Provider store={store}>
        <Globalstyle/>
        <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
