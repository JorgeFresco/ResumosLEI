import {PaletteMode} from "@mui/material";

const getPalette = (mode: PaletteMode) => ({
    palette: {
        mode,
        // palette values for light mode
        appbar: {
            home: (mode === 'light' ? '#000' : '#fff'),
            background: (mode === 'light' ? 'rgb(169,169,169, 0.1)' : '#212121'),
            text: (mode === 'light' ? '#000' : '#fff'),
        },
        divider: (mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'),
        text: {
            primary: (mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#fff'),
            secondary: (mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.7)'),
            disabled: (mode === 'light' ? 'rgba(0, 0, 0, 0.38)' : 'rgba(255, 255, 255, 0.5)'),
            warning: (mode === 'light' ? "#d49c00" : "#ffd81e"),
            link: (mode === 'light' ? "rgba(0, 0, 0, 1)" : "#fff")
        },
        action: {
            active: (mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#fff'),
            hover: (mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)'),
            selected: (mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)'),
            disabled: (mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)'),
            disabledBackground: (mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'),
        },
        background: {
            default: (mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : '#212121'),
            paper: (mode === 'light' ? 'rgb(169,169,169, 0.1)' : '#212121'),
            warning: (mode === 'light' ? 'rgba(255, 229, 100, 0.4)' : 'rgba(185, 174, 119, 0.4)')
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: (mode === 'light' ? 'rgb(169,169,169, 0.1)' : '#212121'),
                    color: (mode === 'light' ? '#000' : '#fff')
                }
            }
        }
    }
})

export default getPalette;