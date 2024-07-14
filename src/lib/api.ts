import coursesData from '../courses.json';
import Year from "@/interfaces/year";
import Course from "@/interfaces/course";


export function getAllYears(): Year[] {
    return coursesData.years;
}

export function getCourseByLink(link: string): Course | undefined {
    const allYears = getAllYears();
    for (const year of allYears) {
        for (const semester of year.semesters) {
            const course = semester.courses.find(course => course.link === link);
            if (course) {
                return course;
            }
        }
    }
    return undefined;
}
