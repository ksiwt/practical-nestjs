import { Controller, Get, Render } from '@nestjs/common';

@Controller('/admin')
export class AdminController {
  @Get('/')
  @Render('admin/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return {
      viewData: viewData,
    };
  }
}
