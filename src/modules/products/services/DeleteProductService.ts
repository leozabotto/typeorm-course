import RedisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../infra/typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

export default class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    const redisCache = new RedisCache();

    if (!product) {
      throw new AppError('product not found');
    }

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');
    await productsRepository.remove(product);
  }
}
