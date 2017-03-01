import {Component} from "@angular/core";
import {DribbbleService} from "../dribbble.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
@Component({
  selector: 'dribbble-detail',
  templateUrl: './dribbble-detail.component.html',
  providers: [DribbbleService]
})
export class DribbbleDetailComponent {
  private subscription: Subscription;
  private post;
  constructor(private dl: DribbbleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.dl.getPost(params['id']).subscribe(res => {
          this.post = res.json().data;
        });
      }
    );
  }
}
