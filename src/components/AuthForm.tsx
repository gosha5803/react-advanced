import React, { useState } from 'react';
import {Stack, TextField, Grid, Button, FormControl, Box, Container, Alert} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const AuthForm = () => {
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {isLoading, err} = useTypedSelector(state => state.auth)
    const {login, setError} = useActions() 

    const submitionHandler = (e:React.FormEvent) => {
        e.preventDefault()
        login(userName, password)
        
    }

    return (
        <>
        <Grid
        container
        direction='column'
        padding={10}
        columnSpacing={{xs:1, sm: 2, md:2}}
        alignItems='center'
        justifyContent='center'
        >
            {err && <Grid 
            mb={5}
            xs={6}
            ><Alert 
            onClose={() => {setError('')}}
            severity='error'>{err}</Alert></Grid>}


            <Grid
            
            >
            <FormControl
            variant='standard'
            
            >
                <form
                onSubmit={(e) => submitionHandler(e)}
                >
                    <Stack spacing={2} 
                    direction='column' 
                    width='400px' 
                    alignItems='center' 
                    margin='auto'
                    border='1px solid'
                    borderRadius='10px'
                    bgcolor='white'                    
                    // zIndex='10'
                    // position='absolute'
                    padding='50px 20px'
                    borderColor='rgb(39, 41, 40)'
                    >
                    <TextField 
                    value={userName} 
                    onChange={e => setUserName(e.target.value)}
                    variant='outlined' label='userName'/>
                    <TextField 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    variant='outlined' label='password' type='password'/>
                    <LoadingButton 
                    variant='contained'
                    type='submit'
                    loading={isLoading}
                    >
                    Войти
                    </LoadingButton>
                    </Stack>
                </form>
            </FormControl>
            </Grid>
        </Grid>
        </>
        );
};

export default AuthForm;