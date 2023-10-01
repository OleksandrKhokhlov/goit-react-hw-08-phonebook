import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Button LinkComponent={NavLink} to="/register" sx={{ color: 'inherit' }}>
        Register
      </Button>
      <Button LinkComponent={NavLink} to="/login" sx={{ color: 'inherit' }}>
        Log In
      </Button>
    </>
  );
};
