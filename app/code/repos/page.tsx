import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const fetchRepos = async () => {
    try {
        const response = await fetch('https://api.github.com/users/fserapian/repos');
        return await response.json();
    } catch (err: any) {
        console.error(err.response.message);
    }
};

const ReposPage = async (): Promise<JSX.Element> => {
    const repos = await fetchRepos();

    if (repos?.message) {
        return <div>{repos.message}</div>
    }

    return (
        <div className="repos-page">
            {repos.map((repo: any) => (
                <div className="border border-white p-3 my-3 rounded">
                    <Link href={`/code/repos/${repo.name}`}>
                        <h3 className="font-bold text-2xl hover:text-amber-500">{repo.name}</h3>
                    </Link>
                    <p>{repo.description}</p>
                    <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-1">
                            <FaStar />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaCodeBranch />
                            <span>{repo.forks_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaEye />
                            <span>{repo.watchers_count}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReposPage;
