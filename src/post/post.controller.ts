import { Controller, Get } from '@nestjs/common';
import { PostService, Post } from './post.service'

@Controller('post')
export class PostController {
    
    constructor ( private postService: PostService ) { }
    
    @Get('')
    async getPosts (): Promise<Post[]> {
       const posts = await this.postService.getAll()
      return this.postService.datas;
    }

    
}
