// src/components/Header.tsx
import { Box, Avatar, Typography, IconButton, Badge } from '@mui/material';
import NotificationsIconOutlined from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Logo } from '../assets/icons';
import { ProfileImage } from '../assets/images';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: '40px',
        height: '120px',
      }}
    >
      <img src={Logo} height={'74px'} width={'74px'} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <IconButton size='small'>
          <HelpOutlineIcon sx={{ height: '32px', width: '32px' }} />
        </IconButton>

        <IconButton size='small'>
          <Badge badgeContent={3} color='error'>
            <NotificationsIconOutlined sx={{ height: '32px', width: '32px' }} />
          </Badge>
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            src={ProfileImage}
            sx={{
              height: '64px',
              width: '64px',
              border: '2px solid #D175B6',
              boxShadow: '0px 0px 40px 0px #D175B633',
            }}
          />
          <Box>
            <Typography variant='body2' sx={{ fontSize: '16px', fontWeight: '400' }}>
              Hi, <span style={{ color: '#00EEC5', cursor: 'pointer' }}>Muhammad Asad</span>
            </Typography>
            <Typography variant='caption' sx={{ fontSize: '16px', fontWeight: '300' }}>
              welcome back!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
