import {ReactNode, useMemo, useState, createContext} from "react";
import {
    Typography,
    AppBar,
    CssBaseline,
    Toolbar,
    IconButton,
    Box, PaletteMode,
} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from '@mui/icons-material/Home';
import {useRouter} from "next/router";

const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});

type HomePageLayoutProps = {
    children: ReactNode
}
export default function HomePageLayout({children}: HomePageLayoutProps) {
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
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <IconButton edge="start" onClick={() => router.push("/")}>
                            <HomeIcon fontSize="large" />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>Resumos MIEI</Typography>
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
            </ThemeProvider>
        </ColorModeContext.Provider>)
}