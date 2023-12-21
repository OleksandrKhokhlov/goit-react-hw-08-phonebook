import { Suspense } from 'react';
import { Container } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { LayoutBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <>
      <LayoutBar />
      <Suspense fallback={null}>
        <Container
          maxWidth={false}
          sx={{
            height: '100vh',
            py: 4,
            m: 0,
            background:
              'linear-gradient(0deg, rgba(17,9,157,1) 0%, rgba(39,39,173,1) 41%, rgba(9,208,248,1) 100%)',
          }}
        >
          <Outlet />
        </Container>
      </Suspense>
      <Loader />
      <Toaster reverseOrder={false} />
    </>
  );
};
