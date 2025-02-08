'use client';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Box, CssBaseline } from "@mui/material";

export default function WeeklyTripsPage() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Header />
          {/* Weekly trips content */}
        </Box>
      </Box>
    </>
  );
}