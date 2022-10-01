import { gql } from '@apollo/client'

export const BATTLE_PROFILE = gql`
  query getBattleProfile($username: String!) {
    user(login: $username) {
      name
      url
      repositories(last: 100, orderBy: { field: STARGAZERS, direction: ASC }) {
        totalCount
        nodes {
          name
          description
          stargazerCount
        }
      }
      followers(first: 0) {
        totalCount
      }
    }
  }
`
