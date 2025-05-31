// src/components/Sidebar.tsx
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Collapse,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';

const sections = [
  {
    name: 'Events',
    subsections: ['New Requests', 'Estimate', 'Events', 'Partial Requests'],
  },
  {
    name: 'Positions',
    subsections: [],
  },
  {
    name: 'Contractors',
    subsections: [],
  },
  {
    name: 'Users',
    subsections: ['Admins', 'Clients', 'Contractors'],
  },
  {
    name: 'Profile',
    subsections: [],
  },
];

const Sidebar = ({ selectedSection, onSectionChange }) => {
  const [openSections, setOpenSections] = useState({
    Events: true,
    Users: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '300px',
        border: '2px solid #D175B6',
        borderRadius: '16px',
        display: { xs: 'none', sm: 'block' },
        flexDirection: 'column',
        overflowY: 'auto',
        boxShadow: '0px 0px 30px 0px #D175B633',
      }}
    >
      <List sx={{ flex: 1, p: 2 }}>
        {sections.map((section, i) => (
          <Box key={section.name}>
            <ListItemButton
              onClick={() => {
                onSectionChange(section.name);
                if (section.subsections.length > 0) {
                  toggleSection(section.name);
                }
              }}
              sx={
                i === 0
                  ? {
                      height: '56px',
                      border: '2px solid #D175B6',
                      borderRadius: '8px',
                      boxShadow: '0px 0px 10px 0px #D175B633',
                    }
                  : {}
              }
            >
              <ListItemText
                primary={
                  <Typography
                    color={selectedSection === section.name ? '#bb86fc' : 'text.primary'}
                    sx={{ fontWeight: selectedSection === section.name ? 'bold' : 'normal' }}
                  >
                    {section.name}
                  </Typography>
                }
              />
              {section.subsections.length > 0 &&
                (openSections[section.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </ListItemButton>

            {section.subsections.length > 0 && (
              <Collapse in={openSections[section.name]} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {section.subsections.map((subsection, j) => (
                    <Box
                      sx={{
                        pl: 4,
                      }}
                    >
                      <ListItemButton key={subsection}>
                        <ListItemText
                          sx={{
                            p: '0px',
                            m: '0px',
                          }}
                          primary={
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                              }}
                            >
                              <Box
                                component='span'
                                sx={{
                                  width: 16,
                                  display: 'inline-block',
                                  position: 'absolute',
                                  left: j === 0 ? '-14px' : '-14px',
                                  top: j === 0 ? '-8px' : '-45px',
                                }}
                              >
                                {j === 0 ? (
                                  i - j === 0 ? (
                                    <svg
                                      width='14'
                                      height='22'
                                      viewBox='0 0 14 22'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M12.9998 21.7C13.3864 21.7 13.6998 21.3866 13.6998 21C13.6998 20.6134 13.3864 20.3 12.9998 20.3V21.7ZM0.299802 0V11.9677H1.6998V0H0.299802ZM0.299802 11.9677C0.299802 16.0689 1.3258 18.5893 3.19628 20.0374C5.02413 21.4525 7.49221 21.7 9.9998 21.7V20.3C7.50739 20.3 5.47548 20.0314 4.05332 18.9304C2.6738 17.8623 1.6998 15.8666 1.6998 11.9677H0.299802ZM9.9998 21.7H12.9998V20.3H9.9998V21.7Z'
                                        fill='#D175B6'
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width='14'
                                      height='22'
                                      viewBox='0 0 14 22'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M12.9998 21.7C13.3864 21.7 13.6998 21.3866 13.6998 21C13.6998 20.6134 13.3864 20.3 12.9998 20.3V21.7ZM0.299802 0V11.9677H1.6998V0H0.299802ZM0.299802 11.9677C0.299802 16.0689 1.3258 18.5893 3.19628 20.0374C5.02413 21.4525 7.49221 21.7 9.9998 21.7V20.3C7.50739 20.3 5.47548 20.0314 4.05332 18.9304C2.6738 17.8623 1.6998 15.8666 1.6998 11.9677H0.299802ZM9.9998 21.7H12.9998V20.3H9.9998V21.7Z'
                                        fill='white'
                                      />
                                    </svg>
                                  )
                                ) : (
                                  <svg
                                    width='14'
                                    height='55'
                                    viewBox='0 0 14 55'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M13 54.7C13.3866 54.7 13.7 54.3866 13.7 54C13.7 53.6134 13.3866 53.3 13 53.3V54.7ZM0.3 0V44.9677H1.7V0H0.3ZM0.3 44.9677C0.3 49.0689 1.326 51.5893 3.19648 53.0374C5.02432 54.4525 7.49241 54.7 10 54.7V53.3C7.50759 53.3 5.47568 53.0314 4.05352 51.9304C2.674 50.8623 1.7 48.8666 1.7 44.9677H0.3ZM10 54.7H13V53.3H10V54.7Z'
                                      fill='white'
                                    />
                                  </svg>
                                )}
                              </Box>
                              <Typography
                                variant='body2'
                                sx={
                                  i - j === 0
                                    ? {
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '4px',
                                        color: '#D175B6',
                                        p: '8px 14px',
                                        border: '1px solid #D175B6',
                                        boxShadow: '0px 0px 10px 0px #D175B633',
                                        textShadow: '0px 0px 10px #D175B633',
                                      }
                                    : {
                                        height: '100%',
                                        width: '100%',
                                        p: '0px 14px',
                                        borderRadius: '4px',
                                      }
                                }
                              >
                                {subsection}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItemButton>
                    </Box>
                  ))}
                </List>
              </Collapse>
            )}
          </Box>
        ))}
      </List>

      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: '0px',
          padding: '16px',
        }}
      >
        <ListItemButton
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '56px',
            background: '#000000',
            borderRadius: '8px',
            bgcolor: 'background.default',
            transition: 'background-color 0.3s ease',
            padding: '16px 20px',
            justifyContent: 'center',
            boxShadow: '0px 0px 30px 0px #D175B633',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <LogoutIcon sx={{ transform: 'rotate(180deg)' }} />
            <ListItemText primary='Logout' />
          </Box>
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
