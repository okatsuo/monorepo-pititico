export interface IResolvers<Input = any, Output = any> {
  handle: (data: Input) => Promise<Output>
}
