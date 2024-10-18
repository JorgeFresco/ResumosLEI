import Pdf from "@/interfaces/pdf";

type Course = {
    name: string
    acronym: string
    ects: number
    description: string
    objectives: string[]
    requirements: string
    program: string[]
    link: string
    image: string
    color: string
    long?: boolean
    pdfs: Pdf[]
}

export default Course