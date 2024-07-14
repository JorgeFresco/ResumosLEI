import React, {ReactNode, useMemo, useState, createContext} from "react";
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Box, PaletteMode, Link, Button, Divider, Menu, MenuItem, Container
} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {useRouter} from "next/router";
import getPalette from "@/styles/PaletteThemes";

const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

type HomePageLayoutProps = {
    children: ReactNode
}

export default function Layout({children}: HomePageLayoutProps) {
    const router = useRouter();
    const [mode, setMode] = useState<PaletteMode>("dark");
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme(getPalette(mode)),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="sticky">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                onClick={() => router.push("/")}
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    cursor: 'pointer'
                                }}
                            >
                                Resumos LEI
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
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
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button sx={{color: "text.link", transition: "color 0s", display: "block"}} onClick={() => router.push("/about")}>Sobre</Button>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                onClick={() => router.push("/")}
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    cursor: 'pointer'
                                }}
                            >
                                Resumos LEI
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button sx={{color: "text.link", transition: "color 0s", display: "block"}} onClick={() => router.push("/about")}>Sobre</Button>
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                {theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
                                <IconButton
                                    sx={{ml: 0.5}}
                                    onClick={colorMode.toggleColorMode}
                                >
                                    {theme.palette.mode === "dark" ? (
                                        <Brightness7Icon/>
                                    ) : (
                                        <Brightness4Icon/>
                                    )}
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
                {children}
                {/* Footer Section */}
                <Divider variant="middle"/>
                <Box sx={{ p: 3 }}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Site criado por <Link color="text.link" href="https://github.com/JorgeFresco" target="_blank">Jorge Fresco</Link> ️
                    </Typography>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
