import Link from 'next/link';

const Header = () => {
    return (
        <header className="py-5 bg-amber-500">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link href="/">AppLogo</Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/about/team">Team</Link>
                    <Link href="/code/repos">Repos</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
