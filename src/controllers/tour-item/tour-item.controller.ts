import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ToursService } from '../../services/tours/tours.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ITourClient } from '../../interfaces/tour';

@Controller('tour-item')
export class TourItemController {
  constructor(private toursService: ToursService) {}

  static imgName: string;

  @Post()
  @UseInterceptors(
    FilesInterceptor('img', 1, {
      storage: diskStorage({
        destination: './public/',
        //метод (объект. файл. колбэк)
        filename: (req, file, cb) => {
          const imgType = file.mimetype.split('/');
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const imgName = file.filename + '-' + uniqueSuffix + '.' + imgType[1];

          cb(null, imgName);
          //запись файла
          TourItemController.imgName = imgName;
        },
      }),
    }),
  )
  initTours(@Body() body: ITourClient): void {
    body.img = TourItemController.imgName;
    this.toursService.uploadTour(body);
  }
}
