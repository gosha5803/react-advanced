import { AppBar, Typography, Grid, Button, Toolbar, IconButton} from '@mui/material';
import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';



const NavBar:React.FC = () => {
    const {isAuth, users} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

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
                            {users.username}
                        </Typography>
                    </IconButton>
                        <Button 
                        color="inherit"
                        onClick={() => logout()}
                        >Выйти</Button>
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
        );
};

export default NavBar;