import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArchiveIcon from '@mui/icons-material/Archive';

const Sidebar = () => {
  return (
    <Drawer 
      variant="permanent" 
      sx={{ 
        width: 240, 
        flexShrink: 0, 
        '& .MuiDrawer-paper': 
        { width: 240, 
          backgroundColor: '#697ba3', 
          color: 'white' 
        }}}>
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: 'white' }}>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archived class" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
