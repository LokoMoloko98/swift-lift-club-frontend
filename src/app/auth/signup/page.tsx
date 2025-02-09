'use client';

import { useFormState } from 'react-dom';
import { handleSignUp } from '@/lib/cognitoActions';
import { Box, Container, Paper, Typography, TextField, Button } from '@mui/material';
import { LockOutlined as LockIcon } from '@mui/icons-material';

export default function SignUpPage() {
  const [state, formAction] = useFormState(handleSignUp, undefined);

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
            Create Account
          </Typography>
          <Typography variant="body1" sx={{ color: "#7f8c8d", marginBottom: 2 }}>
            Please fill in your details to sign up
          </Typography>

          <form action={formAction} className="w-full">
            {state && (
              <Typography color="error" sx={{ mb: 2 }}>
                {state}
              </Typography>
            )}
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{ mb: 2 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="nickname"
              label="Nickname"
              name="nickname"
              autoComplete="nickname"
              sx={{ mb: 2 }}
            />
            
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
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
              }}
            >
              Sign Up
            </Button>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                Already have an account?{' '}
                <a 
                  href="/auth/login" 
                  style={{ 
                    color: '#986a44', 
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Sign In
                </a>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}