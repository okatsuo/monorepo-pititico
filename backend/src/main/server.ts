import { ApolloServer, gql } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import http from 'http'
import express from 'express'
import cors from 'cors'
import { adapterResolver } from '../helpers/adapterResolver'
import { makeFindAllShortLinksResolver } from './factories/findAllShortLinksResolver'
import { makeFindShortLinkByIdResolver } from './factories/findShortLinkByIdResolver'
import { makeShortLinkResolver } from './factories/shortLinkResolver'
import { makeGetUrlByIdResolver } from './factories/urlByIdResolver'

const app = express()

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(';') ?? '*'
app.use(cors({ origin: allowedOrigins }))

app.use(express.json())

const httpServer = http.createServer(app)

const typeDefs = gql`#graphql
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
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    })

    await server.start()
    server.applyMiddleware({ app })
  }
}

App.start().then(() => console.log('Apollo Server started')).catch(console.error)

export default httpServer
