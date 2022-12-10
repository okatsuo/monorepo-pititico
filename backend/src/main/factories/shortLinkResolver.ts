import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { ShortLinkResolver } from '../../resolvers/mutation/short'

export const makeShortLinkResolver = (): ShortLinkResolver => {
  const shortLinksRepository = new ShortLinksRepository()
  return new ShortLinkResolver(shortLinksRepository)
}
