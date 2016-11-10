import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
    {{param}}
    <hr>
    {{fragement}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {

  private subscription : Subscription;
  private fragementSubscription: Subscription;
  param: string;
  fragement: string;
  constructor(private route: ActivatedRoute){
    this.subscription = this.route.queryParams.subscribe(
        queryParam => this.param = queryParam['analytics']
    );

    this.fragementSubscription = this.route.fragment.subscribe(
        fragment => this.fragement = fragment 
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.fragementSubscription.unsubscribe();
  }
}
