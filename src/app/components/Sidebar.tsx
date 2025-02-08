// app/components/Sidebar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Drawer, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { text: 'Dashboard', href: '/' },
    { text: 'Profile', href: '/profile' },
    { text: 'Weekly Trips', href: '/weeklytrips' },
    { text: 'Fare Calculator', href: '/fare' },
  ];

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: '#986a44', // Main color
          color: '#fff',
          boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ padding: '20px 10px' }}>
        <nav>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                key={item.href}
                sx={{ 
                  '&:hover': { 
                    backgroundColor: '#8e5d3e', 
                    borderRadius: '4px' 
                  },
                  backgroundColor: pathname === item.href ? '#8e5d3e' : 'transparent',
                  borderRadius: pathname === item.href ? '4px' : '0',
                }}
              >
                <Link 
                  href={item.href}
                  style={{ 
                    textDecoration: 'none', 
                    color: '#fff', 
                    fontWeight: 'bold', 
                    width: '100%', 
                    display: 'block', 
                    padding: '10px' 
                  }}
                >
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider sx={{ backgroundColor: '#7f8c8d' }} />
        <Box sx={{ position: 'absolute', bottom: '20px', left: '20px' }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              textAlign: 'center'
            }}
          >
            © 2025 Swift Lift Club Portal
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;