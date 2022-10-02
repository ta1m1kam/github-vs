export const scoreCalculate = (battleProfile: BattleProfile) => {
  if (!battleProfile) return 0

  const score =
    battleProfile?.followers.totalCount *
    3 *
    getStarCount(battleProfile?.repositories)
  return score
}

const getStarCount = (repos: Repositories | undefined) => {
  if (!repos) return 0

  const starCount = repos.nodes.reduce(
    (count, { stargazerCount }) => count + stargazerCount,
    0,
  )

  return starCount
}
