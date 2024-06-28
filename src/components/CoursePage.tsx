import { Tabs, Tab, Typography, Box } from "@mui/material";
import Course from "@/interfaces/course";

type CoursePageProps = {
    course: Course
}

function CoursePage({ course }: CoursePageProps) {
    if (!course) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <Typography variant="h4">{course.name}</Typography>
        <Typography variant="subtitle1">ECTS: {course.ects}</Typography>

        <Tabs>
          <Tab label="General Information" />
          <Tab label="Objectives" />
          <Tab label="Requirements" />
          <Tab label="Bibliography" />
          <Tab label="Resumes" />
        </Tabs>

        <TabPanel value={0} index={0}>
          <Typography>Description will be here...</Typography>
        </TabPanel>
        <TabPanel value={1} index={1}>
          <ul>
            <li>Objectives will be here...</li>
          </ul>
        </TabPanel>
        <TabPanel value={2} index={2}>
          <Typography>Requirements will be here...</Typography>
        </TabPanel>
        <TabPanel value={3} index={3}>
          <ul>
            <li>Bibliography will be here...</li>
          </ul>
        </TabPanel>
        <TabPanel value={4} index={4}>
          <Typography>Resumes will be listed here...</Typography>
        </TabPanel>
      </div>
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
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default CoursePage;
