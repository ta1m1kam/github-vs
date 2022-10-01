import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const TOKEN = import.meta.env.VITE_GITHUB_PERSONAL_TOKEN
const GITHUB_GRAPHQL = 'https://api.github.com/graphql'

export const createApolloClient = () => {
  return new ApolloClient({
    link: createHttpLink({
      uri: GITHUB_GRAPHQL,
      headers: {
        authorization: `Bearer ${TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  })
}
