import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const LayoutBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box component="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
