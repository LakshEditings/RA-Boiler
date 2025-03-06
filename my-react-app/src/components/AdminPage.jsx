import React from 'react';
import { Typography, Grid, Paper, List, ListItem, ListItemText, ListItemIcon, TextField, Button, Select, MenuItem, InputLabel } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const AdminPage = () => {
  const students = [
    { id: "7376241MZ154", name: "LAKSHEN V", time: "08:45 am to 09:40 am" },
    { id: "7376241MZ155", name: "VAISHAK K", time: "08:55 am to 09:45 am" },
    { id: "7376241EC164", name: "HARIHARAN P", time: "08:55 am to 09:45 am" },
    { id: "7376241EC183", name: "JAYASURYA ", time: "08:55 am to 09:45 am" },
  ];

  return (
    <Grid container spacing={2} padding={2} style={{ backgroundColor: '#d9d9d9', height: '100vh' }}>
      <Grid item xs={12}>
        <Typography variant="h4">Robotics</Typography>
      </Grid>

      <Grid container spacing={2} item xs={12}>
        <Grid item xs={12} sm={6}>
          <TextField label="Select Date" type="date" fullWidth InputProps={{ startAdornment: <CalendarMonthIcon /> }} />
        </Grid>
        <Grid item xs={12} sm={6}>  
          <InputLabel id="select-time-label">Select Time</InputLabel>
          <Select labelId="select-time-label" label="Select Time" fullWidth>
            <MenuItem value="08:00">08:00 AM</MenuItem>
            <MenuItem value="09:00">09:00 AM</MenuItem>
            <MenuItem value="10:00">10:00 AM</MenuItem>
            <MenuItem value="11:00">11:00 AM</MenuItem>
            <MenuItem value="12:00">12:00 PM</MenuItem>
            <MenuItem value="13:00">01:00 PM</MenuItem>
            <MenuItem value="14:00">02:00 PM</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Grid container spacing={2} item xs={12}>
        <Grid item xs={12} sm={6}>
          <TextField placeholder="Enter OTP" fullWidth style={{ backgroundColor: 'white', color: 'white' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" style={{ backgroundColor: '#697ba3', color: 'white' }}>
            Generate OTP
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '16px', backgroundColor: 'white' }}>
          <Typography variant="h6">
            Recent Attendance ({students.length} Students)
          </Typography>
          <List>
            {students.map((student, index) => (
            <ListItem key={index} style={{ backgroundColor: '#d9d9d9', borderRadius: '8px', marginBottom: '8px', padding: '10px' }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                  <ListItemText primary={`${student.id} - ${student.name}`} secondary={student.time} sx={{ pl: 5 }}/>
            </ListItem>            
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
