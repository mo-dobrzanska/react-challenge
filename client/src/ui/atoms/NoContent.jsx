import { Box, Typography } from '@mui/material';

export const NoContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={require('../../assets/no_content.png')} alt='Brak danych do wyświetlenia'/>
      <Typography>Brak danych do wyświetlenia.</Typography>
    </Box>
  );
};
