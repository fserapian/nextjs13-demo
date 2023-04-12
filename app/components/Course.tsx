import Link from 'next/link';
import { CourseInterface } from '@/interfaces/CourseInterface';

const Course = ({ course }: { course: CourseInterface }): JSX.Element => {
    return (
        <div key={course.id} className="border border-white p-5 my-3">
            <h2 className="font-bold text-2xl">{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link}>
                <div className="p-3 bg-amber-500 w-36 text-center mt-3">
                    Go to course
                </div>
            </Link>
        </div>
    );
};

export default Course;
