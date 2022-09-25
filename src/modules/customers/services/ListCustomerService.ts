import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomerRepository from '../typeorm/repositories/CustomerRepository';

export default class ListCustomerService {
  public async execute(): Promise<Customer[]> {
    const CustomersRepository = getCustomRepository(CustomerRepository);

    const Customers = await CustomersRepository.find();
    return Customers;
  }
}
