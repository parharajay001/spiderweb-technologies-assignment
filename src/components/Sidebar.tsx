// src/components/Sidebar.tsx
import { Box, List, ListItemButton, ListItemText, Typography, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { sections, Section } from '../config/sidebarConfig';
import { SubsectionConnector } from './SubsectionConnector';
import { LogoutButton } from './styled/LogoutButton';

interface SidebarProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
  onLogout?: () => void;
}

interface OpenSections {
  [key: string]: boolean;
}

const SidebarContainer = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </Box>
);

const SectionItem = ({
  section,
  isSelected,
  isOpen,
  onClick,
}: {
  section: Section;
  isSelected: boolean;
  isOpen: boolean;
  onClick: () => void;
}) => (
  <ListItemButton
    onClick={onClick}
    sx={
      isSelected
        ? {
            height: '56px',
            border: '2px solid #D175B6',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px 0px #D175B666',
          }
        : {}
    }
  >
    <ListItemText
      primary={
        <Typography
          color={isSelected ? '#D175B6' : 'text.primary'}
          sx={{
            fontWeight: isSelected ? 'bold' : 'normal',
            ...(isSelected ? { textShadow: '#D175B6 0px 0px 10px' } : {}),
          }}
        >
          {section.name}
        </Typography>
      }
    />
    {section.subsections.length > 0 && (isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
  </ListItemButton>
);

const SubsectionItem = ({
  subsection,
  index,
  isActive,
  isParentActive,
  onClick,
}: {
  subsection: { name: string; path: string };
  index: number;
  isActive: boolean;
  isParentActive: boolean;
  onClick: () => void;
}) => (
  <Box sx={{ pl: 4 }}>
    <ListItemButton onClick={onClick}>
      <ListItemText
        sx={{ p: '0px', m: '0px' }}
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
                left: '-14px',
                top: index === 0 ? '-8px' : '-45px',
              }}
            >
              <SubsectionConnector isFirst={index === 0} isParentActive={isParentActive} />
            </Box>
            <Typography
              variant='body2'
              sx={
                isActive
                  ? {
                      height: '100%',
                      width: '100%',
                      borderRadius: '4px',
                      color: '#D175B6',
                      p: '8px 14px',
                      border: '1px solid #D175B6',
                      boxShadow: '0px 0px 10px 0px #D175B666',
                      textShadow: '#D175B6 0px 0px 10px',
                    }
                  : {
                      height: '100%',
                      width: '100%',
                      p: '0px 14px',
                      borderRadius: '4px',
                    }
              }
            >
              {subsection.name}
            </Typography>
          </Box>
        }
      />
    </ListItemButton>
  </Box>
);

export const Sidebar: React.FC<SidebarProps> = ({ selectedSection, onSectionChange, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSections, setOpenSections] = useState<OpenSections>({
    Events: true,
    Users: true,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleNavigation = (section: string, path: string) => {
    onSectionChange(section);
    navigate(path);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      console.log('Logout clicked');
    }
  };

  return (
    <SidebarContainer>
      <List sx={{ flex: 1, p: 2 }}>
        {sections.map((section, index) => (
          <Box key={section.name}>            <SectionItem
              section={section}
              isSelected={selectedSection === section.name}
              isOpen={openSections[section.name]}
              onClick={() => {
                handleNavigation(section.name, section.path);
                if (section.subsections.length > 0) {
                  toggleSection(section.name);
                }
              }}
            />

            {section.subsections.length > 0 && (
              <Collapse in={openSections[section.name]} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  {section.subsections.map((subsection, j) => (                    <SubsectionItem
                      key={subsection.name}
                      subsection={subsection}
                      index={j}
                      isParentActive={selectedSection === section.name}
                      isActive={location.pathname === subsection.path}
                      onClick={() => handleNavigation(section.name, subsection.path)}
                    />
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
        <LogoutButton onClick={handleLogout}>
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
        </LogoutButton>
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;
