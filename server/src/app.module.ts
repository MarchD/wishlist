import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env['MONGO_INITDB_ROOT_USERNAME']}:${process.env['MONGO_INITDB_ROOT_PASSWORD']}@wishlist.61fqi.mongodb.net/wishlist?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
})
export class AppModule {}
