import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_URL, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    dbName: process.env.MONGO_DB_NAME,
    authSource: process.env.MONGO_AUTH_SOURCE,
  }), UsersModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
console.log(process.env.MONGO_URL, process.env.MONGO_USER, process.env.MONGO_PASSWORD, process.env.MONGO_DB_NAME);
