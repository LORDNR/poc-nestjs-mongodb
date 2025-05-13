import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { UsersService } from 'src/users/users.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly userService: UsersService
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    if (createCatDto?.user_id) {
      const user = await this.userService.findById(createCatDto?.user_id);
      if (!user) throw new HttpException('user_id not found', HttpStatus.NOT_FOUND);
    }

    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
