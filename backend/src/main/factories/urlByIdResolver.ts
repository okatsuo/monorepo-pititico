import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { GetUrlByIdResolver } from '../../resolvers/query/GetUrlById'
import { IResolvers } from '../../types/resolvers'

export const makeGetUrlByIdResolver = (): IResolvers => {
  const shortLinksRepository = new ShortLinksRepository()
  return new GetUrlByIdResolver(shortLinksRepository)
}
