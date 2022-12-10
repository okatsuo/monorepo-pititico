import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { IShortLinks } from '../../types/entities/shortLinks'
import { IResolvers } from '../../types/resolvers'

export class FindAllShortLinksResolver implements IResolvers {
  constructor (
    private readonly shortLinksRepository: ShortLinksRepository
  ) {}

  async handle (): Promise<IShortLinks[]> {
    return await this.shortLinksRepository.findAll()
  }
}
