import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { IResolvers } from '../../types/resolvers'
import { IShortLinks } from '../../types/entities/shortLinks'

interface IRequest {
  url: string
}

export class ShortLinkResolver implements IResolvers {
  constructor (
    private readonly shortLinksRepository: ShortLinksRepository
  ) {}

  async handle ({ url }: IRequest): Promise<IShortLinks> {
    return await this.shortLinksRepository.create(url)
  }
}
