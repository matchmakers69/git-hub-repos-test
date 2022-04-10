export type IRepos = {
    id: string;
    name: string;
    full_name: string;
    description: string;
    stargazers_count: string;
}

export type IRepo = {
    total_count: number;
    incomplete_results:boolean;
    items: IRepos[]
}
