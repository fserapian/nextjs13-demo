import Link from 'next/link';

type Props = {
    dirs: string[];
}

const RepoDirs =  ({ dirs }: Props) => {
    return (
        <div className="repo-dirs">
            <ul>
                {dirs.map((dir: any) => (
                    <li>
                        <Link key={dir.path} href={`/code/repos/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RepoDirs;
