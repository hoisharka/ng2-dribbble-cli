import {Component} from "@angular/core";
import {DribbbleService} from "../dribbble.service";

@Component({
  selector: 'dribbble-list',
  templateUrl: './dribbble-list.component.html'
})
export class DribbbleListComponent {
  posts;
  page = 0;

  constructor(private dl: DribbbleService){
    this.page = 1;
    this.dl.getPosts(this.page).subscribe(res => {
      this.posts = res.json().data;
      console.log(this.posts);
    });
  }

  loadMore() {
    this.page++;
    this.dl.getPosts(this.page).subscribe(res => {
      res.json().data.forEach(post => {
        this.posts.push(post);
      });
    })
  }
}
