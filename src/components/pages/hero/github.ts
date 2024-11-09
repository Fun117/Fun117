export interface GitHubUserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export type res = {
  repoCount: number;
  followersCount: number;
  daysPassed: number;
};

export const fetchGitHubData = async (username: string): Promise<res | string> => {
  try {
    let response: res = {
      repoCount: 0,
      followersCount: 0,
      daysPassed: 0,
    };

    // ユーザー情報を取得
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );
    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData: GitHubUserData = await userResponse.json();

    // フォロワー数
    response.followersCount = userData.followers;

    // リポジトリ数
    response.repoCount = userData.public_repos;

    // 日数を計算
    const createdDate = new Date(userData.created_at);
    const currentDate = new Date();
    const days = Math.floor(
      (currentDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    response.daysPassed = days;

    return response;
  } catch (err) {
    return (err as Error).message;
  }
};
