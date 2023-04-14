'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CourseInterface } from '@/interfaces/CourseInterface';

const CourseSearch = ({ getSearchResults }: any) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/courses/search?query=${query}`);
        const filteredCourses: CourseInterface[] = await res.json();
        getSearchResults(filteredCourses);
        setQuery('');
    };

    return (
        <form className="py-3" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search courses..." value={query} className="mr-3 px-3 py-1 w-3/6 text-black"
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)} />
            <button type="submit" className="bg-amber-500 px-3 py-1">Search</button>
        </form>
    );
};

export default CourseSearch;
