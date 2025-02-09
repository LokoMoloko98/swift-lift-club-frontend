'use client';
import { Box, Avatar, Typography } from "@mui/material";
import { PowerIcon } from "@heroicons/react/24/outline";
import { handleSignOut } from "@/lib/cognitoActions";

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
      {/* <Avatar 
        alt={auth?.user?.profile?.name} 
        src={auth?.user?.profile?.picture} 
        sx={{ width: 56, height: 56 }} 
      /> */}
      <Box>
        {/* <Typography variant="h6" fontWeight="bold">
          {auth?.user?.profile?.name}
        </Typography> */}
        <form action={handleSignOut}>
          <button 
            className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </Box>
    </Box>
  );
}