import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import Loader from 'elements/Loader';

const loading = () => {
  return <Loader />;
};

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Routes />
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
