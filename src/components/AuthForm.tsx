import React, { useState } from 'react';
import {Stack, TextField, Grid, Button} from '@mui/material'
import {LoadingButton} from '@mui/lab'

const AuthForm = () => {
    const [userName, setUserName] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submitionHandler = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
    }

    return (
        <Stack spacing={2} 
        direction='column' 
        width='400px' 
        alignItems='center' 
        margin='auto'
        border='1px solid'
        borderRadius='10px'
        marginTop='100px'
        // zIndex='10'
        // position='absolute'
        padding='30px 20px'
        borderColor='gray'
        >
            <TextField variant='outlined' label='userName'/>
            <TextField variant='outlined' label='password' type='password'/>
            <LoadingButton 
            variant='contained'
            type='submit'
            // loading
            >
            Войти
            </LoadingButton>
        </Stack>
        );
};

export default AuthForm;