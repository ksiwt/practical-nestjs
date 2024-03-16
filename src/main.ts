import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Sets up serving static files in the Express application.
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // Sets the base directory for view templates in the Express application
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Sets up Handlebars to use partial views location.
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));

  // Sets up Handlebars to watch for changes in the partial views location.
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));

  // Configures the view template engine to be used in the Express application.
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
