import {Injectable} from '@angular/core';
import {Jsonp} from "@angular/http";

@Injectable()
export class DribbbleService {
  api: string = 'http://api.dribbble.com/v1/';
  token: string = 'bc0239a39745e8604bb996d5ae6cd73ca605d4a0b448de4ab3b21b31fd610966';
  constructor(private jsonp:Jsonp) {
  }
  getPosts(page){
    return this.jsonp.get(this.api + '/shots?page='+ page +'&access_token='+this.token+'&callback=JSONP_CALLBACK');
  }
  getPost(id){
    return this.jsonp.get(this.api + '/shots/'+id+'?access_token='+this.token+'&callback=JSONP_CALLBACK');
  }
}
