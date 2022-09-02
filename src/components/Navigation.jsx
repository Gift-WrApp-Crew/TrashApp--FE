/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { useState } from 'react';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppBar, Toolbar, Stack, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../state/services/fetch-utils';

export default function Navigation() {
  const [currentUser, setCurrentUser] = useState({});

  async function handleLogout() {
    await logoutUser();
    location.replace('/');
    setCurrentUser({});
  }
  return (
    <AppBar position="static" style={{ backgroundColor: 'black' }} sx={{ width: '100%' }}>
      <Toolbar style={{ color: '#7e8f31' }}>
        <Stack direction="row" spacing={25}>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            padding="20"
            component={Link}
            to={'/posts'}
          >
            <HomeIcon sx={{ fontSize: 30, marginLeft: 50 }} />
          </Button>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to={'/create-post'}
          >
            <AddBoxIcon sx={{ fontSize: 30 }} />
          </Button>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to={'/favorite'}
          >
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </Button>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to={'/about'}
          >
            <EmojiPeopleIcon sx={{ fontSize: 30 }} />
          </Button>
          <Button
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={handleLogout}
          >
            <ExitToAppIcon sx={{ fontSize: 30 }} />
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
