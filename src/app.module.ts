import { Module }       from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AlleenModule } from '@alleen/core';
import { AlleenPrismaModule } from '@alleen/prisma';

import { PRISMA_REGISTRY, PRISMA_PROVIDERS } from './prisma/prisma.registry';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    AlleenPrismaModule.forRoot({
      databases: PRISMA_PROVIDERS.map((ServiceClass : any) => ({
        name:    new ServiceClass().alleenName,
        service: ServiceClass,
      })),
    }),

    AlleenModule.forRoot({
      registry:  PRISMA_REGISTRY,
      providers: PRISMA_PROVIDERS,
      exposeApi: true,
    }),
  ],
})
export class AppModule {}