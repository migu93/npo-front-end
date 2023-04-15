import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { Adb as AdbIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {useState} from "react";

const pages = [
    { name: 'Главная', path: '/' },
    { name: 'О нас', path: '/about-us' },
    { name: 'Наши Работы', path: '/our-works' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Контакты', path: '/contacts' },
    { name: 'Лицензии', path: '/license' }


    // Add other pages as needed
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* ... (existing logo code) */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="medium"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                                    <Button component={RouterLink} to={page.path} color="inherit" variant="text" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, gap: 3, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button component={RouterLink} to={page.path} color="inherit" variant="text">
                                <Typography textAlign="center">{page.name}</Typography>
                            </Button>
                        ))}
                    </Box>

                    {/* ... (existing user menu code) */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}


export default ResponsiveAppBar
