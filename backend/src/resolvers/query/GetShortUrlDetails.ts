import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { IShortLinks } from '../../types/entities/shortLinks'
import { IResolvers } from '../../types/resolvers'

interface IRequest {
  id: string
}

export class GetShortUrlDetails implements IResolvers {
  constructor (
    private readonly shortLinksRepository: ShortLinksRepository
  ) {}

  async handle ({ id }: IRequest): Promise<IShortLinks> {
    const shortLink = await this.shortLinksRepository.findById(id)

    if (!shortLink) throw new Error('Short link not found')

    return shortLink
  }
}
