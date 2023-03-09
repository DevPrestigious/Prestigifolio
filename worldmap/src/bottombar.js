import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {BrowserView, MobileView} from 'react-device-detect';


export default function SimpleBottomNavigation() {
   
   const [value, setValue] = React.useState(2);

   return (
      <>
      <MobileView>
      <Box sx={{ width: '100%' }}>
         <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}
         >
            <BottomNavigationAction label="Something Someday" icon={<TimelapseIcon />} />
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Travel Blog" href="./map.html" icon={<LocationOnIcon />} />
         </BottomNavigation>
      </Box>
      </MobileView>
      <BrowserView></BrowserView>
      </>
   );
}
