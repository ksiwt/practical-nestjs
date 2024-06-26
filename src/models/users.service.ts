import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createOrUpdate(user: User): Promise<User> {
    const hash = await bcrypt.hash(user.getPassword(), 10);
    user.setPassword(hash);
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email: email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.getPassword());
      if (isMatch) {
        return user;
      }
    }
    return null;
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id: Number(id) });
  }

  updateBalance(id: number, balance: number) {
    return this.userRepository.update(id, { balance: balance });
  }
}
