import React from 'react';
import { Typography, Grid, TextField, Button } from '@mui/material';

const StudentPage = () => {
  return (
    <Grid container spacing={2} padding={2} sx={{ backgroundColor: '#d9d9d9', minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Typography variant="h4">Student Attendance</Typography>
      </Grid>
      <Grid item xs={12} sm={6}> 
        <TextField label="Select Date" type="date" sx={{ width: '81%' }} />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Enter OTP" sx={{ width: '40%' }} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" sx={{ backgroundColor: '#697ba3' }}>Submit OTP</Button>
      </Grid>
    </Grid>
  );
};

export default StudentPage;
