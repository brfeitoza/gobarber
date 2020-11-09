import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getRepository(Transaction);

    const checkIfTransactionExists = await transactionsRepository.findOne({
      where: { id },
    });

    if (!checkIfTransactionExists) {
      throw new AppError('This transaction does not exists');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
