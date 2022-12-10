import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { FindShortLinkByIdResolver } from '../../resolvers/query/redirectById'

export const makeFindShortLinkByIdResolver = (): FindShortLinkByIdResolver => {
  const shortLinksRepository = new ShortLinksRepository()
  return new FindShortLinkByIdResolver(shortLinksRepository)
}
