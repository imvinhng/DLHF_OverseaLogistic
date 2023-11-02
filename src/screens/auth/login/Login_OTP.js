import React from 'react';
import { OTP_Login } from '../utils/OTP';
import { useRoute } from '@react-navigation/native';

function Login_OTP(props) {
    const route = useRoute();
    const { phone_number } = route.params;

    return (
        <OTP_Login phone_number={phone_number} />
    );
}

export default Login_OTP;