import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Typography variant="body1" component="p">
        Welcome, {user.name}
      </Typography>
      <Button
        size="small"
        type="button"
        sx={{
          ml: 2,
          color: 'inherit',
          backgroundColor: '#125197',
          '&:hover': {
            backgroundColor: '#0f2e7f',
          },
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
