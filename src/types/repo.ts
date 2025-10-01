export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  visibility: "public" | "private";
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
}
