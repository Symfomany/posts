import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'supertest';
import { AppService } from './app.service';
import User from './user';

  


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello ( @Req() req: Request ): string {
    console.log(req)
    return this.appService.getHello();
  }
  
  // GET
  @Get('/welcome')
  getWelcome(): Array<string> {
    return ['Valentin', 'Julien'];
  }

  
  // POST
  @Post('/ok')
  postOk ( @Body() user: User ): string {
    console.log(user)
    return 'ok';
  }
  
  // POST
  @Post('/hello/:prenom')
  postHello ( @Param( 'prenom' ) prenom: string ): string {
    return `Hello ${prenom}`;
  }
    
  // POST
  @Post('/message')
  postMessage ( @Body() body ): string {
    console.log(body)
    return body.message;
  }
  
  // TODO: 1. Créer un controller POST en CLI avec Nest  
  // TODO: 2: Importe Firebase Database puis l'initialiser dans le controller POST
  // TODO: 3: Créer une mini API REST dans le controller POST: CRUD: Créer, Voir, Modifier, Supprimer un POST
  
}
