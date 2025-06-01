import NorthIcon from '@mui/icons-material/North';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function AssignCoordinatorCoordinator(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box {...other}>
      <Grid container spacing={'10px'}>
        <Grid size={6}>
          <Typography sx={{ fontSize: '24px', fontWeight: '400', mb: 2 }}>
            Assign Coordinator
          </Typography>
          <Box gap={'4px'} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Autocomplete
              fullWidth
              options={['Coordinator 1', 'Coordinator 2', 'Coordinator 3']} // You can add coordinator options here
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder='Search Coordinator'
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#fff',
                      '& fieldset': {
                        borderRadius: '8px',
                        borderColor: '#fff',
                      },
                      '&:hover fieldset': {
                        borderColor: '#fff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#D175B6',
                      },
                    },
                    '& .MuiInputBase-input': {
                      color: '#fff',
                    },
                  }}
                />
              )}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#D175B6',
                  cursor: 'pointer',
                }}
              >
                Add New Coordinator
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={6}>
          <Typography sx={{ fontSize: '24px', fontWeight: '400', mb: 2 }}>
            Event Name <span style={{ fontSize: '20px', fontWeight: '300' }}>(Venue Here)</span>
          </Typography>
          <Grid container height={'74px'} spacing={'10px'}>
            <Grid
              size={12}
              sx={{
                border: '1px solid #D175B6',
                fontSize: '14px',
                fontWeight: '300',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                p: '4px 10px',
                borderRadius: '3px',
              }}
            >
              <Grid
                size={6}
                sx={{
                  fontSize: '14px',
                  fontWeight: '300',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Start: <span style={{ fontWeight: '500' }}>12-12-2023</span>
              </Grid>
              <Grid
                size={6}
                sx={{
                  fontSize: '14px',
                  fontWeight: '300',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Ends: <span style={{ fontWeight: '500' }}>15-12-2023</span>
              </Grid>
            </Grid>
            <Grid
              size={12}
              sx={{
                border: '1px solid #D175B6',
                fontSize: '14px',
                fontWeight: '300',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                p: '4px 10px',
                borderRadius: '3px',
              }}
            >
              Venue Address: Some Location 12, Name Here, City, State.
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Typography sx={{ fontSize: '24px', fontWeight: '400', mb: 2 }}>
            Assign Contractor
          </Typography>
          <Grid container spacing={'20px'}>
            <Grid size={3.1}>
              <Box
                sx={{
                  border: '1px solid #D175B6',
                  borderRadius: '12px',
                  gap: '16px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#000000',
                  boxShadow: '0px 0px 30px 0px #FFFFFF33',
                }}
              >
                {[1, 2, 3, 4, 5].map((room) => (
                  <Box
                    key={room}
                    sx={{
                      border: '1px solid #D175B6',
                      borderRadius: '8px',
                      height: '80px',
                      padding: '16px',
                      cursor: 'pointer',
                      ...(room === 1 ? { backgroundColor: '#D175B6' } : {}),
                      boxShadow: '0px 0px 30px 0px #D175B633',
                      '&:hover': {
                        backgroundColor: '#D175B61A',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '20px', fontWeight: '500' }}>
                        Meeting Room {room}
                      </Typography>
                      <svg
                        width='36'
                        height='36'
                        viewBox='0 0 36 36'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g filter='url(#filter0_d_0_481)'>
                          <path
                            d='M18 10L20.4324 15.5676L26 18L20.4324 20.4324L18 26L15.5676 20.4324L10 18L15.5676 15.5676L18 10Z'
                            fill='#D175B6'
                          />
                          <path
                            d='M19.9746 15.7676L20.0527 15.9473L20.2324 16.0254L24.751 18L20.2324 19.9746L20.0527 20.0527L19.9746 20.2324L18 24.751L16.0254 20.2324L15.9473 20.0527L15.7676 19.9746L11.248 18L15.7676 16.0254L15.9473 15.9473L16.0254 15.7676L18 11.248L19.9746 15.7676Z'
                            stroke='white'
                          />
                        </g>
                        <defs>
                          <filter
                            id='filter0_d_0_481'
                            x='0'
                            y='0'
                            width='36'
                            height='36'
                            filterUnits='userSpaceOnUse'
                            color-interpolation-filters='sRGB'
                          >
                            <feFlood flood-opacity='0' result='BackgroundImageFix' />
                            <feColorMatrix
                              in='SourceAlpha'
                              type='matrix'
                              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                              result='hardAlpha'
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation='5' />
                            <feComposite in2='hardAlpha' operator='out' />{' '}
                            <feColorMatrix
                              type='matrix'
                              values={
                                room === 1
                                  ? '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
                                  : '0 0 0 0 0.82 0 0 0 0 0.46 0 0 0 0 0.71 0 0 0 1 0'
                              }
                            />
                            <feBlend
                              mode='normal'
                              in2='BackgroundImageFix'
                              result='effect1_dropShadow_0_481'
                            />
                            <feBlend
                              mode='normal'
                              in='SourceGraphic'
                              in2='effect1_dropShadow_0_481'
                              result='shape'
                            />
                          </filter>
                        </defs>
                      </svg>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: '500',
                          color: room === 1 ? '#000000' : '#D175B6',
                        }}
                      >
                        {12} Positions
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '12px', color: '#FFFFFF' }}>
                      Start from 12 Jan 2023 - Ends at 15 Jan 2023
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid size={8.9}>
              <Box>
                <Typography sx={{ fontSize: '18px', fontWeight: '500', mb: '12px' }}>
                  Positions
                </Typography>
              </Box>
              <Box
                sx={{
                  border: '1px solid #D175B6',
                  borderRadius: '12px',
                  padding: '16px 0px',
                  bgcolor: '#000000',
                  boxShadow: '0px 0px 30px 0px #FFFFFF33',
                }}
              >
                <TableContainer sx={{ maxHeight: '423px' }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            padding: '8px 20px',
                            color: 'inherit',
                            backgroundColor: '#000000',
                            borderBottom: '1px solid #D175B6',
                          }}
                        >
                          Position
                        </TableCell>
                        <TableCell
                          sx={{
                            padding: '8px',
                            color: 'inherit',
                            backgroundColor: '#000000',
                            borderBottom: '1px solid #D175B6',
                          }}
                        >
                          Time
                        </TableCell>
                        <TableCell
                          sx={{
                            padding: '8px',
                            color: 'inherit',
                            backgroundColor: '#000000',
                            borderBottom: '1px solid #D175B6',
                          }}
                        >
                          Info
                        </TableCell>
                        <TableCell
                          sx={{
                            padding: '8px',
                            color: 'inherit',
                            backgroundColor: '#000000',
                            borderBottom: '1px solid #D175B6',
                          }}
                        >
                          Quantity
                        </TableCell>
                        <TableCell
                          sx={{
                            padding: '8px',
                            color: 'inherit',
                            backgroundColor: '#000000',
                            borderBottom: '1px solid #D175B6',
                          }}
                        >
                          Select Contractor
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array(8)
                        .fill(null)
                        .map((_, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                              '&:hover': { backgroundColor: '#D175B61A' },
                            }}
                          >
                            <TableCell sx={{ padding: '8px 20px', color: 'inherit' }}>
                              Camera {index + 1} (Video)
                            </TableCell>
                            <TableCell sx={{ padding: '8px', color: 'inherit' }}>
                              9 am - 7 pm
                            </TableCell>
                            <TableCell sx={{ padding: '8px', color: 'inherit' }}>
                              LP default
                            </TableCell>
                            <TableCell sx={{ padding: '8px', color: 'inherit' }}>20</TableCell>
                            <TableCell sx={{ padding: '8px', color: 'inherit' }}>
                              <Autocomplete
                                size='small'
                                options={[]}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    placeholder='Select Contractor'
                                    sx={{
                                      '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px',
                                        borderColor: '#D175B6',
                                        '&:hover fieldset': {
                                          borderColor: '#D175B6',
                                        },
                                        '&.Mui-focused fieldset': {
                                          borderColor: '#D175B6',
                                        },
                                      },
                                    }}
                                  />
                                )}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
            <Grid
              size={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#D175B6',
                  color: '#fff',
                  height: '60px',
                  width: '210px',
                  padding: '16px 60px',
                  borderRadius: '8px',
                  boxShadow: '0px 0px 20px 0px #00000099 inset, 0px 30px 80px 0px #FF00FF4D',
                  '&:hover': {
                    backgroundColor: '#D175B6CC',
                  },
                }}
              >
                Save Edits
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function NewEventRequest() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: '20px 40px', gap: '20px' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{ height: '40px', width: '40px', background: '#FFFFFF1A', borderRadius: '50%' }}
        >
          <NorthIcon
            sx={{
              transform: 'rotate(-90deg)',
            }}
          />
        </IconButton>
        <Typography sx={{ fontSize: '40px', fontWeight: '400' }}>
          Event Name <span style={{ fontSize: '24px', fontWeight: '300' }}>(Venue Details)</span>
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            width: '702px',
            height: '50px',
            borderRadius: '8px',
            border: '2px solid #D175B6',
            overflow: 'hidden',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            sx={{
              '& .MuiTab-root': {
                padding: '0 20px',
                transition: 'all 0.3s ease-in-out',
                '&.Mui-selected': {
                  background: '#D175B6',
                  color: '#fff',
                },
                '&:hover': {
                  background: '#D175B666',
                  color: '#fff',
                },
              },
            }}
          >
            <Tab sx={{ textTransform: 'none' }} label='Event Details' {...a11yProps(0)} />
            <Tab
              sx={{ textTransform: 'none' }}
              label='Assign Coordinator/Coordinator'
              {...a11yProps(1)}
            />
            <Tab sx={{ textTransform: 'none' }} label='Session Management' {...a11yProps(2)} />
            <Tab sx={{ textTransform: 'none' }} label='Generate SOW' {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Event Details
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AssignCoordinatorCoordinator value={value} index={1}>
            Assign Coordinator/Coordinator
          </AssignCoordinatorCoordinator>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Session Management
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Generate SOW
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
