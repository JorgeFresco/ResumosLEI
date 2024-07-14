import { GetStaticPaths, GetStaticProps } from 'next';
import CoursePage from '@/components/CoursePage';
import Course from '@/interfaces/course';
import { getAllYears, getCourseByLink } from '@/lib/api';
import { ParsedUrlQuery } from 'querystring';

type CoursePageProps = {
    course: Course;
};

interface Params extends ParsedUrlQuery {
    link: string;
}

export default function Course({ course }: CoursePageProps) {
    return <CoursePage course={course} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allYears = getAllYears();

    // Generate paths for all courses
    const paths = allYears.flatMap(year =>
        year.semesters.flatMap(semester =>
            semester.courses.map(course => ({
                params: { link: course.link }
            }))
        )
    );

    return {
        paths,
        fallback: false, // or 'blocking' if you want to generate pages on demand
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { link } = context.params as Params;

    // Fetch course data based on the link
    const course = getCourseByLink(link);

    return {
        props: {
            course,
        },
    };
};
