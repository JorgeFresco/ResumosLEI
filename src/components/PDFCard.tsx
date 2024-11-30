import React, { useState } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material";
import Pdf from "@/interfaces/pdf";

type PDFCardProps = {
    pdf: Pdf
};

const PDFCard: React.FC<PDFCardProps> = ({ pdf }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card variant="outlined" sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <CardActionArea onClick={handleOpen}>
                    <CardMedia
                        component="img"
                        sx={{ paddingTop: "5%" }}
                        image="/pdf-placeholder.png" // Path to the placeholder image in public folder
                        alt={pdf.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6">
                            {pdf.title}
                        </Typography>
                        <Typography gutterBottom variant="body1" color="textSecondary">
                            Autor: {pdf.author}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog open={open} onClose={handleClose} maxWidth="sm">
                <DialogTitle>{pdf.title}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        {pdf.description}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{justifyContent: "center"}}>
                    <Button
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        variant="contained"
                        color="primary"
                    >
                        Download
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PDFCard;
