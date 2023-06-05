import Layout from './Layout/Layout';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../Pages/Home/Home'));
const Tweets = lazy(() => import('../Pages/Tweets/Tweets'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" redirectTo="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
