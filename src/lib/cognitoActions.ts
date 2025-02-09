'use server';

import { redirect } from "next/navigation";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
  autoSignIn,
} from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

interface SignUpState {
  message?: string;
  errorMessage?: string;
}

interface VerificationState {
  message: string;
  errorMessage: string;
}

export async function handleSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const response = await signUp({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        userAttributes: {
          email: String(formData.get("email")),
          name: String(formData.get("name")),
          nickname: String(formData.get("nickname")),
        },
        autoSignIn: true,
      },
    });

    if (response.isSignUpComplete) {
      return redirect("/auth/login");
    }
  } catch (error) {
    return getErrorMessage(error);
  }

  return redirect("/auth/confirm-signup");
}


export async function handleSendEmailVerificationCode(
  prevState: VerificationState,
  formData: FormData
) {
  try {
    await resendSignUpCode({
      username: String(formData.get("email")),
    });
    
    return {
      ...prevState,
      message: "Code sent successfully",
      errorMessage: "",
    };
  } catch (error) {
    return {
      ...prevState,
      message: "",
      errorMessage: getErrorMessage(error),
    };
  }
}

export async function handleConfirmSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
    });
    
    if (isSignUpComplete) {
      await autoSignIn();
      redirect("/auth/login");
    }
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const { isSignedIn, nextStep } = await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });

    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({
        username: String(formData.get("email")),
      });
      redirect("/auth/confirm-signup");
    }

    if (isSignedIn) {
      redirect("/dashboard");
    }
  } catch (error) {
    return getErrorMessage(error);
  }
}

export async function handleSignOut() {
  try {
    // First, sign out from Amplify
    await signOut();
    
    // Then, handle Cognito hosted UI logout
    const cognitoDomain = "https://auth-swift-lift-club.moloko-mokubedi.co.za";
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const logoutUri = process.env.NEXT_PUBLIC_LOGOUT_URL || "http://localhost:3000";
    
    // Redirect to Cognito logout URL
    return redirect(
      `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`
    );
  } catch (error) {
    console.error("Sign out error:", getErrorMessage(error));
    // Even if there's an error, attempt to redirect to login
    redirect("/auth/login");
  }
}