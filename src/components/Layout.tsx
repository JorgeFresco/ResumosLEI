import React, {ReactNode, useMemo, useState, createContext} from "react";
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Box, PaletteMode, Link, Button, Divider,
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
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" onClick={() => router.push("/")}>
                            <HomeIcon fontSize="large" sx={{color: "appbar.home"}}/>
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>Resumos MIEI</Typography>
                        <Button sx={{color: "text.link", transition: "color 0s"}} onClick={() => router.push("/about")}>Sobre</Button>
                        <Box ml={5}>
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
        </ColorModeContext.Provider>)
}