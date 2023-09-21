import React from 'react';
import {Stack, TextField, Grid, Button} from '@mui/material'
import {LoadingButton} from '@mui/lab'

const AuthForm = () => {
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
            <TextField variant='outlined' label='password'/>
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