import {
    Tabs,
    Tab,
    Typography,
    Box,
    Container,
    List,
    ListItem,
    CircularProgress,
    useMediaQuery,
    Button,
    Pagination,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Link, Card, CardContent,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, {SyntheticEvent, useState} from "react";
import { useTheme } from "@mui/system";
import Course from "@/interfaces/course";
import Head from "next/head";
import PDFCard from "@/components/PDFCard";

type CoursePageProps = {
    course: Course;
};

function CoursePage({ course }: CoursePageProps) {
    const [value, setValue] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const theme = useTheme();

    // Define breakpoints for screen size adjustments
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.only('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.only('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    // Adjust the number of files per page based on screen size xs:6, sm:4, md:3, lg: 2.4
    let filesPerPage = 10;
    if (isExtraSmallScreen) {
        filesPerPage = 6
    } else if (isSmallScreen) {
        filesPerPage = 6;
    } else if (isMediumScreen) {
        filesPerPage = 8;
    } else if (isLargeScreen) {
        filesPerPage = 10;
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleDialogOpen = () => {
        setOpenDialog(true); // Open the modal
    };

    const handleDialogClose = () => {
        setOpenDialog(false); // Close the modal
    };

    // Pagination logic
    const currentFiles = course.pdfs.slice(
        (currentPage - 1) * filesPerPage,
        currentPage * filesPerPage
    );

    if (!course) {
        return <CircularProgress />;
    }

    return (
        <>
            <Head>
                <title>Resumos LEI - {course.link}</title>
                <meta name="viewport" content="width=device-width, initial-scale=0.80" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Box padding={6} display="flex" justifyContent="center">
                    <Typography variant="h4">{course.name}</Typography>
                </Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Informação Geral" />
                        <Tab label="Requisitos Prévios" />
                        <Tab label="Ficheiros" />
                        <Tab label="Médias" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* Content for 'Informação Geral' */}
                    <Box
                        display="flex"
                        flexDirection={isExtraSmallScreen ? 'column' : 'row'}
                        alignItems="center"
                        textAlign={isExtraSmallScreen ? 'center' : 'left'}
                        justifyContent={isExtraSmallScreen ? 'center' : 'space-between'}
                        paddingBottom={isExtraSmallScreen ? 1 : 0}
                    >
                        <Typography variant="h5">{course.name}</Typography>
                        <Typography variant="h6">ECTS: {course.ects}</Typography>
                    </Box>
                    <Typography gutterBottom marginBottom={5}>{course.description}</Typography>
                    {
                        course.program.length > 0 && (
                            <>
                                <Card sx={{ borderLeft: `5px solid ${course.color}`, boxShadow: 2 }}>
                                    <CardContent>
                                        <Typography fontWeight="bold" fontSize={20}>Programa:</Typography>
                                        <List disablePadding dense sx={{ listStyle: "decimal", pl: 4 }}>
                                            {course.program.map((value, index) => (
                                                <ListItem disableGutters sx={{ display: "list-item" }} key={index}>{value}</ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </>
                        )
                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* Content for 'Requisitos' */}
                    <Typography>{course.requirements}</Typography>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {/* Content for 'Ficheiros' */}
                    {course.pdfs.length === 0 ? (
                        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                            <Typography variant="h6" color="textSecondary">
                                Sem ficheiros para esta cadeira
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            <Grid container spacing={2}>
                                {currentFiles.map((pdf, index) => (
                                    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} key={index}>
                                        <PDFCard pdf={pdf} />
                                    </Grid>
                                ))}
                            </Grid>

                            {/* Pagination (only display if there are files and more than one page) */}
                            {course.pdfs.length > filesPerPage && (
                                <Box display="flex" justifyContent="center" mt={4}>
                                    <Pagination
                                        count={Math.ceil(course.pdfs.length / filesPerPage)}
                                        page={currentPage}
                                        onChange={handlePageChange}
                                        color="primary"
                                    />
                                </Box>
                            )}
                        </>
                    )}

                    {/* File upload section */}
                    <Box mt={4}>
                        <Button variant="contained" color="primary" onClick={handleDialogOpen}>
                            Instruções para submeter um ficheiro
                        </Button>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {
                        course.average_grades && course.average_grades.length > 0 && (
                            <>
                                <Typography fontWeight="bold" fontSize={20} gutterBottom>
                                    Média Por Ano:
                                </Typography>
                                <Grid container spacing={2}>
                                    {course.average_grades.map((data, index) => (
                                        <Grid size={{ xs: 12, md: 6}} key={index}>
                                            <Card sx={{ borderLeft: `5px solid ${course.color}`, boxShadow: 2 }}>
                                                <CardContent>
                                                    <Typography variant="subtitle1" fontWeight="bold">
                                                        {data.year}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <strong>Inscritos:</strong> {data.enrolled}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <strong>Média:</strong> {data.average}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <strong>Taxa de Reprovação:</strong> {data.failed}
                                                    </Typography>
                                                    <Typography variant="body2">
                                                        <strong>Professor(a):</strong> {data.professor}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )
                    }
                </TabPanel>

                {/* Dialog for Upload Instructions */}
                <Dialog open={openDialog} onClose={handleDialogClose}>
                    <DialogTitle>Instruções para submeter um ficheiro</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Para submeter um ficheiro para esta cadeira, por favor enviem um email para <Link color="text.link" href="mailto:resumoslei@gmail.com">resumoslei@gmail.com</Link> com as seguintes informações:
                        </DialogContentText>
                        <List>
                            <ListItem>
                                <Typography>
                                    <Typography component="span" fontWeight="bold">- Assunto: </Typography>
                                    Nome da Cadeira (e.g., {course.link})
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    <Typography component="span" fontWeight="bold">- Corpo: </Typography>
                                    Podem incluir o vosso nome se desejarem que apareça no site ou outros comentários
                                    que achem relevantes
                                </Typography>
                            </ListItem>
                            <ListItem>- Anexem o ficheiro que desejam adicionar à cadeira</ListItem>
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDialogClose} color="primary">
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </>
    );
}

function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

export default CoursePage;
