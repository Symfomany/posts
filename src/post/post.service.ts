import { Injectable } from '@nestjs/common';
import database from './auth';


export class Post{
    title: string;
}
@Injectable()
export class PostService {
    
    
    datas: Array<Post>;
    
    /**
     * Récupérer les posts
     */
    async getAll () {
        return new Promise( ( resolve, reject ) => {
             database.ref('/posts').on('value', (snapshot) =>{
                const data = snapshot.val();
                 this.datas = data;
                 resolve(true)
             } );
        })
        
        
        
        
    }
    
}
