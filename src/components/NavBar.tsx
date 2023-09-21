import { AppBar, Typography, Grid, Button, Toolbar, IconButton} from '@mui/material';
import {AccountCircle} from '@mui/icons-material'
import React from 'react';



const NavBar:React.FC = () => {
    const isAuth = true
    return (

        <AppBar position="static">
        <Toolbar
        style={{
            backgroundColor:'#263238'
        }}
        >
        <Grid container justifyContent='space-between' alignItems='center'>
            {isAuth 
            ? 
            <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
            <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            >
            <Typography variant='h6' component='div' sx={{
                flexGrow:0,
                fontWeight:300
            }}
            >
                Gosha_5803
            </Typography>
                
            </IconButton>
            
            {/* <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            >
                <AccountCircle />
            </IconButton> */}
            <Button color="inherit">Выйти</Button>
            </>
            : 
            <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/> 
            <Button color="inherit">Login</Button>
            </>  
    }
    </Grid>
        </Toolbar>
      </AppBar>
        // <AppBar
        // position='static'
        // >
        //     <Toolbar>
                
        //         {isAuth ? 
        //         <Stack 
        //         direction='row'
        //         spacing={2}>
        //             <Button color='inherit'>Выйти</Button>
        //         </Stack> 
        //         :   
        //         <Stack 
        //         direction='row'
        //         spacing={2}>
        //             <Button color='inherit'>Логин</Button>
        //         </Stack>
        //     }
        //     </Toolbar>
        // </AppBar>
    
    //     <Box sx={{ flexGrow: 1 }}>

    // </Box>
    
        );
};

export default NavBar;