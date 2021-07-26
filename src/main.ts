import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'Hi there';
  }
}

/// Whenever the application will start NEST will look at the AppModule and look at
/// all the controllers listed in the decorator and create an instances of all those
@Module({
  controllers: [AppController],
})
class AppModule {}

/// runs every time the application is started which is generally named as 'bootstrap'
(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(5000, () => {
    console.log('Listening on port 5000');
  });
})();
