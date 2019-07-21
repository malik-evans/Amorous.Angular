
export interface IFactory<T> {
  create(): T;
}

export abstract class FactoryBase<T> implements IFactory<T> {
  abstract create(): T;

  createMany(): T[] {
    return new Array<any>(20)
          .fill({})
          .map( _ => this.create());
  }
}
