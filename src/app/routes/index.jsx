import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import NavigateLoggedInUser from './navigate-logged-in-user';

// Common Pages
const Home = React.lazy(() => import('pages/common/Home'));

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MainRouter;
