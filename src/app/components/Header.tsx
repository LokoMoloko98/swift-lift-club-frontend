'use client';
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box 
      sx={{ 
        position: 'absolute', 
        top: 20, 
        right: 20, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2 
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Swift Lift Club Portal
      </Typography>
    </Box>
  );
}