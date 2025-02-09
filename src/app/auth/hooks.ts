"use client"
import { signInWithRedirect, signOut, getCurrentUser } from "aws-amplify/auth";

export const login = () => signInWithRedirect();
export const logout = () => signOut();
export const getUser = () => getCurrentUser();
