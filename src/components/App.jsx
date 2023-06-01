import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../Pages/Home/Home'));
const Tweets = lazy(() => import('../Pages/Tweets/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" redirectTo="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};
