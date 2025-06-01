// src/components/EventRequestsTable.tsx
import AddIcon from '@mui/icons-material/Add';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  PaginationItem,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import NorthIcon from '@mui/icons-material/North';

// Mock data
const eventRequests = [
  {
    id: 1,
    eventName: 'Tech Conference 2024',
    eventStart: 'Jan 15, 2024',
    eventEnd: 'Jan 17, 2024',
    clientName: 'Sarah Johnson',
    contactInfo: '+1 415-555-0123',
    venue: 'Silicon Valley Convention Center',
    city: 'San Francisco',
    state: 'California',
    zipcode: '94105',
  },
  {
    id: 2,
    eventName: 'Wedding Reception - Smith',
    eventStart: 'Feb 14, 2024',
    eventEnd: 'Feb 14, 2024',
    clientName: 'Michael Smith',
    contactInfo: '+1 212-555-0124',
    venue: 'Grand Plaza Hotel',
    city: 'New York',
    state: 'New York',
    zipcode: '10007',
  },
  {
    id: 3,
    eventName: 'Music Festival 2024',
    eventStart: 'Mar 1, 2024',
    eventEnd: 'Mar 3, 2024',
    clientName: 'David Wilson',
    contactInfo: '+1 305-555-0125',
    venue: 'Bayfront Park',
    city: 'Miami',
    state: 'Florida',
    zipcode: '33132',
  },
  {
    id: 4,
    eventName: 'Corporate Summit',
    eventStart: 'Mar 15, 2024',
    eventEnd: 'Mar 16, 2024',
    clientName: 'Emily Davis',
    contactInfo: '+1 312-555-0126',
    venue: 'Business Tower Conference Hall',
    city: 'Chicago',
    state: 'Illinois',
    zipcode: '60601',
  },
  {
    id: 5,
    eventName: 'Fashion Week',
    eventStart: 'Apr 1, 2024',
    eventEnd: 'Apr 7, 2024',
    clientName: 'Isabella Martinez',
    contactInfo: '+1 323-555-0127',
    venue: 'Modern Art Gallery',
    city: 'Los Angeles',
    state: 'California',
    zipcode: '90012',
  },
  {
    id: 6,
    eventName: 'Gaming Expo 2024',
    eventStart: 'Apr 20, 2024',
    eventEnd: 'Apr 22, 2024',
    clientName: 'Ryan Thompson',
    contactInfo: '+1 206-555-0128',
    venue: 'Tech Convention Center',
    city: 'Seattle',
    state: 'Washington',
    zipcode: '98101',
  },
  {
    id: 7,
    eventName: 'Food & Wine Festival',
    eventStart: 'May 5, 2024',
    eventEnd: 'May 7, 2024',
    clientName: 'Sophie Anderson',
    contactInfo: '+1 512-555-0129',
    venue: 'Culinary Arts Center',
    city: 'Austin',
    state: 'Texas',
    zipcode: '78701',
  },
  {
    id: 8,
    eventName: 'Medical Conference',
    eventStart: 'May 15, 2024',
    eventEnd: 'May 17, 2024',
    clientName: 'Dr. James Wilson',
    contactInfo: '+1 617-555-0130',
    venue: 'Medical Research Center',
    city: 'Boston',
    state: 'Massachusetts',
    zipcode: '02108',
  },
  {
    id: 9,
    eventName: 'Art Exhibition',
    eventStart: 'Jun 1, 2024',
    eventEnd: 'Jun 30, 2024',
    clientName: 'Emma White',
    contactInfo: '+1 503-555-0131',
    venue: 'Contemporary Arts Museum',
    city: 'Portland',
    state: 'Oregon',
    zipcode: '97201',
  },
  {
    id: 10,
    eventName: 'Startup Summit',
    eventStart: 'Jun 15, 2024',
    eventEnd: 'Jun 16, 2024',
    clientName: 'Alex Chen',
    contactInfo: '+1 415-555-0132',
    venue: 'Innovation Hub',
    city: 'San Jose',
    state: 'California',
    zipcode: '95113',
  },
  {
    id: 11,
    eventName: 'Summer Music Concert',
    eventStart: 'Jul 4, 2024',
    eventEnd: 'Jul 4, 2024',
    clientName: 'Lisa Brown',
    contactInfo: '+1 615-555-0133',
    venue: 'Downtown Amphitheater',
    city: 'Nashville',
    state: 'Tennessee',
    zipcode: '37203',
  },
  {
    id: 12,
    eventName: 'Book Fair 2024',
    eventStart: 'Jul 20, 2024',
    eventEnd: 'Jul 22, 2024',
    clientName: 'Robert Clark',
    contactInfo: '+1 404-555-0134',
    venue: 'Public Library Convention Center',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: '30303',
  },
  {
    id: 13,
    eventName: 'Fitness Expo',
    eventStart: 'Aug 5, 2024',
    eventEnd: 'Aug 7, 2024',
    clientName: 'Jennifer Lee',
    contactInfo: '+1 702-555-0135',
    venue: 'Sports Complex',
    city: 'Las Vegas',
    state: 'Nevada',
    zipcode: '89101',
  },
  {
    id: 14,
    eventName: 'Real Estate Conference',
    eventStart: 'Aug 15, 2024',
    eventEnd: 'Aug 16, 2024',
    clientName: 'William Turner',
    contactInfo: '+1 303-555-0136',
    venue: 'Business Center',
    city: 'Denver',
    state: 'Colorado',
    zipcode: '80202',
  },
  {
    id: 15,
    eventName: 'Film Festival',
    eventStart: 'Sep 1, 2024',
    eventEnd: 'Sep 7, 2024',
    clientName: 'Maria Rodriguez',
    contactInfo: '+1 305-555-0137',
    venue: 'Cinema Complex',
    city: 'Miami',
    state: 'Florida',
    zipcode: '33130',
  },
  {
    id: 16,
    eventName: 'Education Summit',
    eventStart: 'Sep 20, 2024',
    eventEnd: 'Sep 21, 2024',
    clientName: 'Daniel Kim',
    contactInfo: '+1 213-555-0138',
    venue: 'University Conference Center',
    city: 'Los Angeles',
    state: 'California',
    zipcode: '90015',
  },
  {
    id: 17,
    eventName: 'Auto Show 2024',
    eventStart: 'Oct 5, 2024',
    eventEnd: 'Oct 7, 2024',
    clientName: 'Thomas Moore',
    contactInfo: '+1 313-555-0139',
    venue: 'Convention Center',
    city: 'Detroit',
    state: 'Michigan',
    zipcode: '48226',
  },
  {
    id: 18,
    eventName: 'Blockchain Conference',
    eventStart: 'Oct 15, 2024',
    eventEnd: 'Oct 16, 2024',
    clientName: 'Kevin Zhang',
    contactInfo: '+1 415-555-0140',
    venue: 'Tech Hub',
    city: 'San Francisco',
    state: 'California',
    zipcode: '94105',
  },
  {
    id: 19,
    eventName: 'Wedding Expo',
    eventStart: 'Nov 1, 2024',
    eventEnd: 'Nov 3, 2024',
    clientName: 'Rachel Green',
    contactInfo: '+1 212-555-0141',
    venue: 'Luxury Hotel',
    city: 'New York',
    state: 'New York',
    zipcode: '10001',
  },
  {
    id: 20,
    eventName: 'Holiday Market',
    eventStart: 'Nov 25, 2024',
    eventEnd: 'Dec 24, 2024',
    clientName: 'Chris Martin',
    contactInfo: '+1 312-555-0142',
    venue: 'City Square',
    city: 'Chicago',
    state: 'Illinois',
    zipcode: '60602',
  },
  {
    id: 21,
    eventName: 'New Year Gala',
    eventStart: 'Dec 31, 2024',
    eventEnd: 'Jan 1, 2025',
    clientName: 'Michelle Park',
    contactInfo: '+1 206-555-0143',
    venue: 'Grand Ballroom',
    city: 'Seattle',
    state: 'Washington',
    zipcode: '98101',
  },
  {
    id: 22,
    eventName: 'Science Fair',
    eventStart: 'Jan 15, 2025',
    eventEnd: 'Jan 17, 2025',
    clientName: 'Peter Watson',
    contactInfo: '+1 617-555-0144',
    venue: 'Science Museum',
    city: 'Boston',
    state: 'Massachusetts',
    zipcode: '02110',
  },
  {
    id: 23,
    eventName: 'Jazz Festival',
    eventStart: 'Feb 1, 2025',
    eventEnd: 'Feb 3, 2025',
    clientName: 'Nina Simmons',
    contactInfo: '+1 504-555-0145',
    venue: 'Music Hall',
    city: 'New Orleans',
    state: 'Louisiana',
    zipcode: '70112',
  },
  {
    id: 24,
    eventName: 'Career Fair',
    eventStart: 'Feb 15, 2025',
    eventEnd: 'Feb 16, 2025',
    clientName: 'Andrew Wilson',
    contactInfo: '+1 713-555-0146',
    venue: 'Convention Center',
    city: 'Houston',
    state: 'Texas',
    zipcode: '77002',
  },
  {
    id: 25,
    eventName: 'Home & Garden Show',
    eventStart: 'Mar 1, 2025',
    eventEnd: 'Mar 3, 2025',
    clientName: 'Laura Palmer',
    contactInfo: '+1 602-555-0147',
    venue: 'Expo Center',
    city: 'Phoenix',
    state: 'Arizona',
    zipcode: '85004',
  },
  {
    id: 26,
    eventName: 'Comic Convention',
    eventStart: 'Mar 15, 2025',
    eventEnd: 'Mar 17, 2025',
    clientName: 'Tony Stark',
    contactInfo: '+1 619-555-0148',
    venue: 'Convention Center',
    city: 'San Diego',
    state: 'California',
    zipcode: '92101',
  },
  {
    id: 27,
    eventName: 'Wine Tasting',
    eventStart: 'Apr 5, 2025',
    eventEnd: 'Apr 6, 2025',
    clientName: 'Sofia Garcia',
    contactInfo: '+1 707-555-0149',
    venue: 'Vineyard Estate',
    city: 'Napa',
    state: 'California',
    zipcode: '94559',
  },
  {
    id: 28,
    eventName: 'Photography Exhibition',
    eventStart: 'Apr 20, 2025',
    eventEnd: 'Apr 30, 2025',
    clientName: 'Mark Johnson',
    contactInfo: '+1 503-555-0150',
    venue: 'Art Gallery',
    city: 'Portland',
    state: 'Oregon',
    zipcode: '97205',
  },
  {
    id: 29,
    eventName: 'Sustainability Summit',
    eventStart: 'May 10, 2025',
    eventEnd: 'May 12, 2025',
    clientName: 'Emma Green',
    contactInfo: '+1 206-555-0151',
    venue: 'Environmental Center',
    city: 'Seattle',
    state: 'Washington',
    zipcode: '98104',
  },
  {
    id: 30,
    eventName: 'Dance Festival',
    eventStart: 'May 25, 2025',
    eventEnd: 'May 27, 2025',
    clientName: 'Julia Chang',
    contactInfo: '+1 212-555-0152',
    venue: 'Performing Arts Center',
    city: 'New York',
    state: 'New York',
    zipcode: '10023',
  },
];

const EventRequestsTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 9;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography sx={{ fontSize: '40px', fontWeight: 'bold' }}>Event Requests</Typography>

        <Box sx={{ display: 'flex', gap: '10px' }}>
          <TextField
            placeholder='Search here'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon sx={{ height: '24px', width: '24px' }} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant='contained'
            color='secondary'
            sx={{
              minWidth: 'auto',
              width: 40,
              height: 40,
              border: '1px solid #fff',
              borderRadius: '8px',
              background: 'linear-gradient(90deg, #FF00FF, #8F00FF)',
            }}
          >
            <AddIcon />
          </Button>
        </Box>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          flex: 1,
          bgcolor: 'transparent',
          boxShadow: 'none',
          borderRadius: '0px',
          overflow: 'auto',
          '& .MuiTableCell-root': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: 0, // This forces ellipsis to work in table cells
          },
          '& .sticky-column': {
            position: 'sticky',
            left: 0,
            zIndex: 3,
            background: 'inherit',
            backdropFilter: 'blur(10px)',
          },
          '& .sticky-header': {
            position: 'sticky',
            left: 0,
            zIndex: 4,
            background: '#D175B6',
          },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  bgcolor: '#D175B6',
                  color: 'white',
                  p: '0px 20px',
                  m: 0,
                  width: '200px',
                  minWidth: '200px',
                  '& .cell-content': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '150px', // Adjust based on icon space
                  },
                }}
                className='sticky-header'
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Event Name
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '220px', minWidth: '220px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Event Start
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '220px', minWidth: '220px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Event End
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '220px', minWidth: '220px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Client Name
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '250px', minWidth: '250px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Contact Info <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '400px', minWidth: '400px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Venue
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '250px', minWidth: '250px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  City
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '250px', minWidth: '250px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  State
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell
                sx={{ bgcolor: '#D175B6', color: 'white', width: '120px', minWidth: '120px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Zipcode
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventRequests.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
              <TableRow key={row.id} hover sx={{ height: '50px' }}>
                <TableCell
                  sx={{
                    p: '0px 20px',
                    m: 0,
                    bgcolor: '#000000',
                    borderBottom: '1px solid #D175B6 !important',
                    '& .cell-content': {
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      width: '150px',
                    },
                  }}
                  className='sticky-column'
                  title={row.eventName} // Add tooltip for truncated text
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size='small' sx={{ mr: 1 }}>
                      <VisibilityOutlinedIcon fontSize='small' />
                    </IconButton>
                    <div className='cell-content'>{row.eventName}</div>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ borderBottom: '1px solid #D175B6 !important' }}
                  title={row.eventStart}
                >
                  {row.eventStart}
                </TableCell>
                <TableCell
                  sx={{ borderBottom: '1px solid #D175B6 !important' }}
                  title={row.eventEnd}
                >
                  {row.eventEnd}
                </TableCell>
                <TableCell
                  sx={{ borderBottom: '1px solid #D175B6 !important' }}
                  title={row.clientName}
                >
                  {row.clientName}
                </TableCell>
                <TableCell
                  sx={{ borderBottom: '1px solid #D175B6 !important' }}
                  title={row.contactInfo}
                >
                  {row.contactInfo}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #D175B6 !important' }} title={row.venue}>
                  {row.venue}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #D175B6 !important' }} title={row.city}>
                  {row.city}
                </TableCell>
                <TableCell sx={{ borderBottom: '1px solid #D175B6 !important' }} title={row.state}>
                  {row.state}
                </TableCell>
                <TableCell
                  sx={{ borderBottom: '1px solid #D175B6 !important' }}
                  title={row.zipcode}
                >
                  {row.zipcode}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#000000',
          height: '54px',
        }}
      >
        <Pagination
          count={Math.ceil(eventRequests.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color='primary'
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => (
                  <NorthIcon
                    sx={{
                      transform: 'rotate(-90deg)',
                    }}
                  />
                ),
                next: () => (
                  <NorthIcon
                    sx={{
                      transform: 'rotate(90deg)',
                    }}
                  />
                ),
              }}
              {...item}
            />
          )}
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '14px',
              color: 'white',
              background: 'transparent !important',
            },
            '& .Mui-selected': {
              color: '#D175B6 !important',
              height: '32px',
              width: '32px',
              background: 'transparent !important',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default EventRequestsTable;
