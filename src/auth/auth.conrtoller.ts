import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { UserService } from '../models/user.service';
import { User } from '../models/user.entity';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Get('/register')
  @Render('auth/register')
  register() {
    const viewData = [];
    viewData['title'] = 'User Register - Online Store';
    viewData['subtitle'] = 'User Register';
    return {
      viewData: viewData,
    };
  }

  @Post('/store')
  @Redirect('/')
  async stroe(@Body() body) {
    const newUser = new User();
    newUser.setName(body.name);
    newUser.setPassword(body.password);
    newUser.setEmail(body.email);
    newUser.setRole('client');
    newUser.setBalance(1000);
    await this.userService.createOrUpdate(newUser);
  }
}
