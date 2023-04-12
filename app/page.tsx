import Courses from '@/app/components/Courses';
import { CourseInterface } from '@/interfaces/CourseInterface';

const fetchCourses = async (): Promise<CourseInterface[]> => {
    const response = await fetch('http://localhost:3000/api/courses');
    return await response.json();
};


const HomePage = async () => {
    const courses: CourseInterface[] = await fetchCourses();
    return (
        <div className="home-page">
            <Courses courses={courses} />
        </div>
    )
}

export default HomePage
