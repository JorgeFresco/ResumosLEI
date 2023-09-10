import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Fade, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTop() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={(event) => handleClick(event)}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Fade>
    );
}
