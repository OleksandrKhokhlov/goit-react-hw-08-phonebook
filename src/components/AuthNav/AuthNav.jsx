import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Button>
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button>
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </div>
  );
};
