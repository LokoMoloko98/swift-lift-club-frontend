"use client"

import { Amplify, type ResourcesConfig } from 'aws-amplify';

export const authConfig: ResourcesConfig["Auth"] = {
    Cognito: {
        userPoolId: "",
        userPoolClientId: ""
    },
};

Amplify.configure({
    Auth: authConfig,
}, { ssr: true });

export default function ConfigureAmplifyClientSide() {
    return null;
}