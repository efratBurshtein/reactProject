import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {  Link,Outlet } from 'react-router-dom'
import { pink } from '@mui/material/colors';
export default function Home() {
  return (  
    <>
    <Box sx={{ width: '100%'}}>  
      <Tabs  centered>
        <Link to="/">
        <Tab label="בית" sx={{color:pink['500']}}/>
        </Link>
        <Link to="/todo">
          <Tab label="משימות" sx={{color:pink['500']}}/>
        </Link>
        <Link to="/post">
          <Tab label="פוסטים" sx={{color:pink['500']}}/>
        </Link>
        <Link to="/photo">
          <Tab label="תמונות" sx={{color:pink['500']}}/>
        </Link>
        <Link to="/users">
          <Tab label="משתמשים" sx={{color:pink['500']}}/>
        </Link>
      </Tabs>
      <Outlet/>
    </Box>
    </>
  );
}

