import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

const Repo = ({ repo }: any) => {
    return (
        <div>
            <h2 className="font-bold text-3xl">{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="flex gap-3 pt-3">
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
    );
};

export default Repo;
