import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="https:google.com">Google</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage
