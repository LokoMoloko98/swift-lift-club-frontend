'use client';
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Box, CssBaseline } from "@mui/material";

export default function FareCalculatorPage() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          <Sidebar />
          Fare calculator content
        </Box>
      </Box>
    </>
  );
}
