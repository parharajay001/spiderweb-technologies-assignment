// src/components/EventRequestsTable.tsx
import AddIcon from '@mui/icons-material/Add';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
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
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

// Mock data
const eventRequests = Array(14)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    eventName: 'Filled Name',
    eventStart: 'Jan 12, 2024',
    eventEnd: 'Jan 14, 2024',
    clientName: 'Muhammad Asad',
    contactInfo: '+1 234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet',
    city: 'Karachi',
    state: 'Sindh',
    zipcode: '12345',
  }));

const EventRequestsTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

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
          '& .MuiTableCell-root': {
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white', p: '0px 20px', m: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Event Name
                  <ExpandCircleDownIcon
                    fontSize='small'
                    sx={{ ml: 0.5, transform: 'rotate(180deg)' }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>Event Start</TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Event End
                  <ExpandCircleDownIcon fontSize='small' sx={{ ml: 0.5 }} />
                </Box>
              </TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  Client Name
                  <ExpandCircleDownIcon
                    fontSize='small'
                    sx={{ ml: 0.5, transform: 'rotate(180deg)' }}
                  />
                </Box>
              </TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>Contact Info</TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>Venue</TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>City</TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>State</TableCell>
              <TableCell sx={{ bgcolor: '#D175B6', color: 'white' }}>Zipcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventRequests.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
              <TableRow key={row.id} hover sx={{ height: '50px' }}>
                <TableCell sx={{ p: '0px 20px', m: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size='small' sx={{ mr: 1 }}>
                      <VisibilityIcon fontSize='small' />
                    </IconButton>
                    {row.eventName}
                  </Box>
                </TableCell>
                <TableCell>{row.eventStart}</TableCell>
                <TableCell>{row.eventEnd}</TableCell>
                <TableCell>{row.clientName}</TableCell>
                <TableCell>{row.contactInfo}</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination
          count={Math.ceil(eventRequests.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color='primary'
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              backgroundColor: 'rgba(187, 134, 252, 0.3)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default EventRequestsTable;
