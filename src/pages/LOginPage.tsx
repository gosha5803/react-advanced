import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage:React.FC = () => {
    return (
        <div
        // style={{
        //     height:'100%',
        //     position:'absolute',
        //     zIndex:'1',
        //     width:'100%',
        //     backgroundColor:'gray'
        // }}
        >
            <AuthForm/>
        </div>
    );
};

export default LoginPage