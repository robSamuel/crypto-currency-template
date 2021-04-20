import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Helmet from 'react-helmet';
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
            <Helmet>
                <script
                    src="https://kit.fontawesome.com/87131fda1b.js"
                    crossorigin="anonymous"
                />
            </Helmet>
        </BrowserRouter>
    );
}

export default App;
