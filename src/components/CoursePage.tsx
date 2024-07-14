import {Tabs, Tab, Typography, Box, Container, List, ListItem, CircularProgress, useMediaQuery} from "@mui/material";
import Course from "@/interfaces/course";
import {SyntheticEvent, useState} from "react";
import {useTheme} from "@mui/system";
import FavoriteIcon from '@mui/icons-material/Favorite';

type CoursePageProps = {
    course: Course
}

function CoursePage({ course }: CoursePageProps) {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    if (!course) {
        return <CircularProgress />;
    }

    return (
        <Container>
            <Box padding={6} display="flex" justifyContent="center">
                <Typography variant="h4">{course.name}</Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Informação Geral" />
                    <Tab label="Objectivos" />
                    <Tab label="Requisitos" />
                    <Tab label="Resumos" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box
                    display="flex"
                    flexDirection={isSmallScreen ? 'column' : 'row'}
                    alignItems="center"
                    textAlign={isSmallScreen ? 'center' : 'left'}
                    justifyContent={isSmallScreen ? 'center' : 'space-between'}
                    paddingBottom={isSmallScreen ? 1 : 0}
                >
                    <Typography variant="h5">{course.name}</Typography>
                    <Typography variant="h6">ECTS: {course.ects}</Typography>
                </Box>
                <Typography paragraph>{course.description}</Typography>
                <Typography fontWeight="bold" fontSize={20}>Programa:</Typography>
                <List disablePadding sx={{ listStyle: "decimal", pl: 4}}>
                    {course.program.map((value, index) => (
                        <ListItem disablePadding sx={{ display: "list-item" }} key={index}>{value}</ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography>No final desta unidade curricular o estudante terá adquirido conhecimentos, aptidões e competências que lhe permitam:</Typography>
                <List disablePadding sx={{ listStyle: "inside", pl: 2}}>
                    {course.objectives.map((value, index) => (
                        <ListItem disablePadding sx={{ display: "list-item" }} key={index}>{value}</ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography>{course.requirements}</Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Typography>A Carolina é mesmo a namorada mais linda do mundo, foda-se <FavoriteIcon sx={{color: "green"}} /><FavoriteIcon sx={{color: "#17b6fa"}} /> </Typography>
            </TabPanel>
        </Container>
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
