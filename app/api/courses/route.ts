import courses from './data.json';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
    return NextResponse.json(courses);
}

export async function POST(request: Request) {
    const { title, description, link, level } = await request.json();

    const newCourse = {
        id: uuidv4(),
        title,
        description,
        link,
        level,
    };

    courses.push(newCourse);

    return NextResponse.json(courses);
}
