'use client';

import { useFormState } from 'react-dom';
import { handleConfirmSignUp, handleSendEmailVerificationCode } from '@/lib/cognitoActions';
import { Box, Container, Paper, Typography, TextField, Button } from '@mui/material';
import { LockOutlined as LockIcon } from '@mui/icons-material';

export default function ConfirmSignUpPage() {
  const [confirmState, confirmFormAction] = useFormState(handleConfirmSignUp, undefined);
  const [resendState, resendFormAction] = useFormState(handleSendEmailVerificationCode, {
    message: '',
    errorMessage: ''
  });

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 3,
            backgroundColor: "#ffffff",
            borderRadius: 3,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <LockIcon sx={{ fontSize: 60, color: "#986a44" }} />
          <Typography variant="h5" gutterBottom sx={{ color: "#986a44", fontWeight: "bold" }}>
            Confirm Sign Up
          </Typography>
          <Typography variant="body1" sx={{ color: "#7f8c8d", marginBottom: 2 }}>
            Please enter the verification code sent to your email
          </Typography>

          <form action={confirmFormAction} className="w-full">
            {confirmState && (
              <Typography color="error" sx={{ mb: 2 }}>
                {confirmState}
              </Typography>
            )}
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="code"
              label="Verification Code"
              id="code"
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#986a44",
                "&:hover": {
                  backgroundColor: "#7a4e32",
                },
                padding: "10px",
                mb: 2
              }}
            >
              Verify Code
            </Button>
          </form>

          <form action={resendFormAction}>
            {resendState.message && (
              <Typography color="success.main" sx={{ mb: 2 }}>
                {resendState.message}
              </Typography>
            )}
            {resendState.errorMessage && (
              <Typography color="error" sx={{ mb: 2 }}>
                {resendState.errorMessage}
              </Typography>
            )}
            
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                color: "#986a44",
                borderColor: "#986a44",
                "&:hover": {
                  borderColor: "#7a4e32",
                  backgroundColor: "rgba(152, 106, 68, 0.04)",
                },
                padding: "10px",
              }}
            >
              Resend Code
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
