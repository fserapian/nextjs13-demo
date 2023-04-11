import { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import Link from 'next/link';
import RepoDirs from '@/app/components/RepoDirs';

type Props = {
    params: {
        name: string
    }
}

const fetchRepo = async (repoName: string) => {
    const response = await fetch(`https://api.github.com/repos/fserapian/${repoName}`);
    return await response.json();
};

const fetchReposDirs = async (repoName: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/fserapian/${repoName}/contents`);
    return await response.json();
};

const RepoPage = async ({ params: { name } }: Props) => {
    const repo = await fetchRepo(name);
    const contents = await fetchReposDirs(name);

    if (contents?.message) {
        return <div>{contents.message}</div>
    }

    const dirs = contents.filter((c: any) => c.type === 'dir');

    return (
        <div className="border border-white mt-4 p-5 w-9/12 mx-auto">
            <Link href="/code/repos">Back to repos</Link>
            <Repo repo={repo} />
            <RepoDirs dirs={dirs} />
        </div>
    );
};

export default RepoPage;
