import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './assets/sass/main.scss';

const App = () => {
    const getRoutes = () => {
        return (
            <Route
                path='/'
                exact
                render={params => (
                    <Home {...params} />
                )}
            />
        )
    }

    return (
        <BrowserRouter>
            <div>
              <Header />
              {getRoutes()}
          </div>
        </BrowserRouter>
    );
}

export default App;
