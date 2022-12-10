import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { adapterResolver } from '../helpers/adapterResolver'
import { makeFindAllShortLinksResolver } from './factories/findAllShortLinksResolver'
import { makeFindShortLinkByIdResolver } from './factories/findShortLinkByIdResolver'
import { makeShortLinkResolver } from './factories/shortLinkResolver'

const typeDefs = `#graphql
  type ShortLink {
    short: String!
    url: String!
    clicks: Int!
    createdAt: Float!
  }

  type Query {
    short(id: String!): ShortLink
    findAll: [ShortLink]!
  }

  type Mutation {
    short(url: String!): ShortLink!
  }
`

const resolvers = {
  Query: {
    short: adapterResolver(makeFindShortLinkByIdResolver()),
    findAll: adapterResolver(makeFindAllShortLinksResolver())
  },
  Mutation: {
    short: adapterResolver(makeShortLinkResolver())
  }
}

class App {
  static start = async (): Promise<void> => {
    const server = new ApolloServer({
      typeDefs,
      resolvers
    })

    const port = 5555
    const { url } = await startStandaloneServer(server, {
      listen: { port }
    })

    console.log(`Server ready at ${url}`)
  }
}

App.start().catch(console.error)
