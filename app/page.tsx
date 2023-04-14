'use client';
import Courses from '@/app/components/Courses';
import { CourseInterface } from '@/interfaces/CourseInterface';
import CourseSearch from '@/app/components/CourseSearch';
import { useEffect, useState } from 'react';
import MainLoading from '@/app/loading';

const HomePage = (): JSX.Element => {
    const [courses, setCourses] = useState<CourseInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
            .then((res) => res.json())
            .then((data: CourseInterface[]) => {
                setCourses(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <MainLoading />;
    }

    return (
        <div className="home-page">
            <CourseSearch getSearchResults={(filteredCourses: CourseInterface[]) => setCourses(filteredCourses)} />
            <Courses courses={courses} />
        </div>
    );
};

export default HomePage;
