import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import {Items,ItemsSchema} from "./dto/schema/items.schema"
import mongoose from 'mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:Items.name ,
      schema: ItemsSchema 
    }])
  ],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
