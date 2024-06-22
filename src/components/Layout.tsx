import React, {ReactNode, useMemo, useState, createContext} from "react";
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Box, PaletteMode, Link, Button,
} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from '@mui/icons-material/Home';
import {useRouter} from "next/router";
import getPalette from "@/styles/PaletteThemes";

const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

type HomePageLayoutProps = {
    children: ReactNode
}

export default function Layout({children}: HomePageLayoutProps) {
    const router = useRouter();
    const [mode, setMode] = useState<PaletteMode>("dark");

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
                <AppBar position="sticky" sx={{ bgcolor: "appbar.background", color: "appbar.text"}}>
                    <Toolbar sx={{ bgcolor: "appbar.background", color: "appbar.text"}}>
                        <IconButton edge="start" onClick={() => router.push("/")}>
                            <HomeIcon fontSize="large" sx={{color: "appBar.home"}}/>
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>Resumos MIEI</Typography>
                        <Button sx={{color: "text.link"}} onClick={() => router.push("/about")}>Sobre</Button>
                        <Box ml={5}>
                            {theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
                            <IconButton
                                sx={{ml: 1}}
                                onClick={colorMode.toggleColorMode}
                                color="inherit"
                            >
                                {theme.palette.mode === "dark" ? (
                                    <Brightness7Icon/>
                                ) : (
                                    <Brightness4Icon/>
                                )}
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {children}
                {/* Footer Section */}
                <Box sx={{ bgcolor: 'background.paper', p: 3, borderTop: '1px solid #4e4e4e' }}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        Site criado por <Link color="text.link" href="https://github.com/JorgeFresco" target="_blank">Jorge Fresco</Link> ️
                    </Typography>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>)
}