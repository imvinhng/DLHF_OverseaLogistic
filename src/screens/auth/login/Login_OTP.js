import React from 'react';
import { OTP_Login } from '../utils/OTP';
import { useRoute } from '@react-navigation/native';

function Login_OTP(props) {
    const route = useRoute();
    const { username } = route.params;

    return (
        <OTP_Login username={username} />
    );
}

export default Login_OTP;