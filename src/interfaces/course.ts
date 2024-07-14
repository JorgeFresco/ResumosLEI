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
}

export default Course