import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { adapterResolver } from '../helpers/adapterResolver'
import { makeFindAllShortLinksResolver } from './factories/findAllShortLinksResolver'
import { makeFindShortLinkByIdResolver } from './factories/findShortLinkByIdResolver'
import { makeShortLinkResolver } from './factories/shortLinkResolver'
import { makeGetUrlByIdResolver } from './factories/urlByIdResolver'

const typeDefs = `#graphql
  type ShortLinkDetails {
    short: String!
    url: String!
    clicks: Int!
    createdAt: Float!
  }

  type Query {
    urlById(id: String!): String!
    shortUrlDetails(id: String!): ShortLinkDetails!
    findAll: [ShortLinkDetails]!
  }

  type Mutation {
    shortener(url: String!): ShortLinkDetails!
  }
`

const resolvers = {
  Query: {
    urlById: adapterResolver(makeGetUrlByIdResolver()),
    shortUrlDetails: adapterResolver(makeFindShortLinkByIdResolver()),
    findAll: adapterResolver(makeFindAllShortLinksResolver())
  },
  Mutation: {
    shortener: adapterResolver(makeShortLinkResolver())
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
