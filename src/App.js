import { useState } from 'react';
import { getUser } from './services/users';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home/Home';
import Auth from './views/auth/Auth';
import Header from './components/header';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  return (
    <BrowserRouter>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
