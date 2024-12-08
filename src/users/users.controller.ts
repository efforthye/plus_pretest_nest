import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Res() res) {
    const allUsers = this.usersService.findAll();
    return res.status(200).send({allUsers});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // curl http://localhost:port/api/users/0 | jq
    if(+id<1) throw new BadRequestException('id is must be greater than 0');
    return this.usersService.findOne(+id);
  }

  @HttpCode(202) // 처리 중
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
