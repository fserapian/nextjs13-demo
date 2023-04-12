import { NextResponse } from 'next/server';
import courses from '../data.json';
import { CourseInterface } from '@/interfaces/CourseInterface';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query: any = searchParams.get('query')
    const filteredCourses: CourseInterface[] = courses.filter((course: CourseInterface) => {
        return course.title.toLowerCase().includes(query?.toLowerCase());
    });
    return NextResponse.json(filteredCourses)
}
