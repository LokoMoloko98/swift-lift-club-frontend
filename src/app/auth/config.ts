"use client"
import { Amplify } from 'aws-amplify'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID!,
      loginWith: {
        oauth: {
          domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
          scopes: ["openid", "email", "profile"],
          redirectSignIn: [process.env.NEXT_PUBLIC_SIGN_IN_REDIRECT!],
          redirectSignOut: [process.env.NEXT_PUBLIC_SIGN_OUT_REDIRECT!],
          responseType: "code",
        },
      }
    },
  }, 
}, { ssr: true })

export default function ConfigureAmplifyClientSide() {
    return null;
}