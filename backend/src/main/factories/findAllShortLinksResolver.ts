import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { FindAllShortLinksResolver } from '../../resolvers/query/findAllShortLinks'

export const makeFindAllShortLinksResolver = (): FindAllShortLinksResolver => {
  const shortLinksRepository = new ShortLinksRepository()
  return new FindAllShortLinksResolver(shortLinksRepository)
}
