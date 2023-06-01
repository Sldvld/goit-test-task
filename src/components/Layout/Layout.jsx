import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar.jsx';
export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
