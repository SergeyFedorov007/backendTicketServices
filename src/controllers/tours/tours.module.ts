import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { jwtConstants } from '../../static/private/constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Tour, TourSchema } from '../../shemas/tour';
import { MongooseModule } from '@nestjs/mongoose';
import { ToursService } from '../../services/tours/tours.service';
import { JwtStrategyService } from '../../services/auth/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],

  controllers: [ToursController],
  providers: [ToursService, JwtStrategyService],
})
export class ToursModule {}
