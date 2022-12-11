import { ShortLinksRepository } from '../../database/shortLinksRepository'
import { IResolvers } from '../../types/resolvers'

export class GetUrlByIdResolver implements IResolvers {
  constructor (
    private readonly shortLinksRepository: ShortLinksRepository
  ) {}

  async handle ({ id }: { id: string }): Promise<string> {
    const short = await this.shortLinksRepository.findById(id)
    if (!short) throw new Error('Short link not found')
    await this.shortLinksRepository.updateClicks(id)
    return short.url
  }
}
