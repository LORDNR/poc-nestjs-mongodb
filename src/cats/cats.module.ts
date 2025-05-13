import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]), UsersModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
