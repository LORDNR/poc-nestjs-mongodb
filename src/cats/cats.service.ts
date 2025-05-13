import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) { }
  
  create(createCatDto: CreateCatDto) {
    // return 'This action adds a new cat';
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  findAll() {
    // return `This action returns all cats`;
    // return this.catModel.find().populate<{ owner: User }>("owner");
    return this.catModel.find().exec();

  }

  findOne(id: string) {
    return this.catModel.findById(id).populate("user_id").exec();
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
