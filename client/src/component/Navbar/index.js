import * as React from 'react';
import { Link } from 'react-router-dom';
import Style from "./index.module.css"
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import style from "./index.module.css"
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';


import Divider from '@mui/material/Divider';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
  
    marginRight: -drawerWidth,
    ...(open && {

    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export default function Navbar() {


  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" style={{display:"flex",backgroundColor:"#323333", justifyContent:"space-between"}}>
       
         
          
          <ul style={{display:"flex", justifyContent:"space-between", height:"60px", alignItems:"center"}} className={style.nav}>
             <div>
                <img src='https://preview.colorlib.com/theme/security/img/logo.png' alt/>
            </div>
            <div className={style.right }>
            <li>
      <Link className= {style.links} to='/'>Home</Link>
    </li>
    <li>
      <Link className= {style.links} to='#'>About Us </Link>
    </li>
    <li>
      <Link className= {Style.links} to='#'>Services</Link>
    </li>
    <li>
      <Link className= {Style.links} to='#'>Team</Link>
    </li>
    
    <li>
      <Link className= {Style.links} to='#'>Price</Link>

    </li>
    <li>
      <Link className= {Style.links} to='/blog'>Blog</Link>
      
    </li>
    <li>
      <Link className= {Style.links} to='#'>Elements</Link>
      
    </li>
            </div>
  
    </ul>
    
      
    
      </AppBar>
      <Main >
        <DrawerHeader />

      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
      
      >
      
        <Divider />
        <List>
        <ul className={Style.burger}>
     <li>
      <Link  className={Style.lists} to='/'>Home</Link>
    </li>
    <li>
      <Link  className={Style.lists} to='/about'>About</Link>
    </li>
    <li>
      <Link className={Style.lists}  to='/contact'>Contact</Link>
    </li>
    <li>
      <Link  className={Style.lists} to='/services'>Services</Link>
    </li>
    <li>
      <Link  className={Style.lists} to='/register'>Register</Link>
    </li>
    </ul>
    
        </List>
        <Divider />
   
      </Drawer>
    </Box>
  );
}