import { CourseInterface } from '@/interfaces/CourseInterface';
import Course from '@/app/components/Course';

const Courses = ({ courses }: { courses: CourseInterface[] }): JSX.Element => {
    return (
        <div className="courses">
            {courses.map((course: CourseInterface) => (
                <Course course={course} />
            ))}
        </div>
    );
};

export default Courses;
