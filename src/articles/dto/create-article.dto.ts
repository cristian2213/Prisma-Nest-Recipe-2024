import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class CreateArticleDto implements Prisma.ArticleCreateInput {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description?: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published?: boolean;

  @ApiProperty()
  createAt?: string | Date;

  @ApiProperty()
  updatedAt?: string | Date;
}
