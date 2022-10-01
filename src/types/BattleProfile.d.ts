type BattleProfile = {
  name: string
  url: string
  repositories: Repositories
  followers: {
    totalCount: number
  }
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
