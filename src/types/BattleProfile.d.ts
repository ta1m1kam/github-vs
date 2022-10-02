type BattleProfile = {
  name: string
  url: string
  avatarUrl: string
  repositories: Repositories
  followers: {
    totalCount: number
  }
  score: number
} | null

type Repository = {
  name: string
  description: string
  stargazerCount: number
}

type Repositories = {
  totalCount: number
  nodes: Repository[]
}
