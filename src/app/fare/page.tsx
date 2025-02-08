'use client';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Box, CssBaseline } from "@mui/material";

export default function FareCalculatorPage() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          {/* Fare calculator content */}
        </Box>
      </Box>
    </>
  );
}
