import coursesData from '../courses.json';
import Year from "@/interfaces/year";


export function getAllYears(): Year[] {
    return coursesData.years;
}
