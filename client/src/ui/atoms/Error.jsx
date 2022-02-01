import { Box, Typography } from '@mui/material';

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {
        error?.message?.includes('Network Error') ? (
          <Typography>Uruchom Server!</Typography>
        ) : null //  TODO in TASK 1
      }
      <img src={require('../../assets/unknown_error.png')}  alt='Wystąpił nieoczekiwany błąd'/>
      <Typography>Wystąpił nieoczekiwany błąd.</Typography>
    </Box>
  );
};
