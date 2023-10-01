import { Suspense } from 'react';
import { LayoutBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <LayoutBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Loader />
      <Toaster reverseOrder={false} />
    </>
  );
};
