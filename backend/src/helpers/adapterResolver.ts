import { IResolvers } from '../types/resolvers'

export const adapterResolver = <ReturnType = any>(resolver: IResolvers) => {
  return async (_: any, args: any, _context: any): Promise<ReturnType> => {
    return await resolver.handle(args)
  }
}
