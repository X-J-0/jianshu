import React from 'react';
import { Provider } from 'react-redux';
import { Globalstyle } from './style.js';
import Header from './common/header';
import store from './store';


function App() {
  return (
    <div className="dell">
      <Provider store={store}>
        <Globalstyle/>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
