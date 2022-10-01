import { gql } from '@apollo/client'

export const USER_INFO = gql`
  query getUserInfo($username: String!) {
    user(login: $username) {
      login
    }
  }
`
