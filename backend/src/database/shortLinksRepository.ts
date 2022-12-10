import { ShortLinks } from '@prisma/client'
import { generateNanoId } from '../helpers/generateNanoId'
import { prisma } from './prisma'

export class ShortLinksRepository {
  async create (url: string): Promise<ShortLinks> {
    const shortLink = generateNanoId()

    return await prisma.shortLinks.create({
      data: {
        url,
        short: shortLink,
        clicks: 0
      }
    })
  }

  async findById (id: string): Promise<ShortLinks | null> {
    return await prisma.shortLinks.findUnique({ where: { short: id } })
  }

  async updateClicks (id: string): Promise<ShortLinks> {
    const shortLink = await this.findById(id)

    if (!shortLink) throw new Error('Short link not found')

    const updatedShortLink = await prisma.shortLinks.update({
      where: { short: id },
      data: {
        clicks: shortLink.clicks + 1
      }
    })

    return updatedShortLink
  }

  async findAll (): Promise<ShortLinks[]> {
    return await prisma.shortLinks.findMany()
  }
}
