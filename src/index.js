import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { MyMovieDataProvider } from './Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyMovieDataProvider>
    <Router> 
    <App />
    </Router>
    </MyMovieDataProvider>
  </React.StrictMode>
);

