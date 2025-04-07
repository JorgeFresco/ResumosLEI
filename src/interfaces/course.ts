import Pdf from "@/interfaces/pdf";
import Average_Grade from "@/interfaces/average_grade";

type Course = {
    name: string
    acronym: string
    ects: number
    description: string
    requirements: string
    program: string[]
    link: string
    image: string
    color: string
    long?: boolean
    pdfs: Pdf[]
    average_grades: Average_Grade[]
}

export default Course