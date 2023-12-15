import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ToursService } from '../../services/tours/tours.service';
import { ITour } from '../../interfaces/tour';
import { JwtAuthGuardService } from '../../services/auth/jwt-auth.guard/jwt-auth.guard.service';

@Controller('tours')
export class ToursController {
  constructor(private toursService: ToursService) {}

  //@UseGuards (JwtAuthGuard)
  //генерация тура
  // @Get()
  // getAllTours(): void {
  //     this.toursService.generateTours()
  // }
  //
  // @Get(":remove")
  // removeAllTours(@Param('remove') remove): void{
  //     this.toursService.deleteTours();
  // }

  @Post()
  initTours(): Promise<ITour[]> {
    return this.toursService.generateTours(); //метод для записи данных в базу
    // return this.toursService.getAllTours(); //вызываем результат из базы
  }

  @Get()
  getAllTours(): Promise<ITour[]> {
    return this.toursService.getAllTours();
  }

  @Get(':id')
  getTourById(@Param('id') id): Promise<ITour> {
    return this.toursService.getTourById(id);
  }

  @Delete()
  removeAllTours(): Promise<any> {
    return this.toursService.deleteTours();
  }

  // @Get('name')
  // getToursByName(@Param('name') name): Promise<ITour[]> {
  //   return this.toursService.getToursByName(name);
  // }
}
