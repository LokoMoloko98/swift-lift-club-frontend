"use client"

import { Amplify, type ResourcesConfig } from 'aws-amplify';

export const authConfig: ResourcesConfig["Auth"] = {
    Cognito: {
        userPoolId: "us-east-1_vMqahJEK3",
        userPoolClientId: "q53cgn2pi2qo5dbelablp0sio"
    },
};

Amplify.configure({
    Auth: authConfig,
}, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}