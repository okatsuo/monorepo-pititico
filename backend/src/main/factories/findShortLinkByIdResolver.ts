import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { GetShortUrlDetails } from '../../resolvers/query/GetShortUrlDetails'

export const makeFindShortLinkByIdResolver = (): GetShortUrlDetails => {
  const shortLinksRepository = new ShortLinksRepository()
  return new GetShortUrlDetails(shortLinksRepository)
}
