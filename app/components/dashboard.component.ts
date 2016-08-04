import { Component } from '@angular/core';
import { provideRouter, RouterConfig, ActivatedRoute, Router } from '@angular/router';

import { MyService } from '../services/my.service';

// export class UserComponent {
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router) {}

  // ngOnInit() {
  //   this.sub = this.route.params.subscribe(params => {
  //     let id = +params['id'];
  //
  //     this.userID = id;
  //   });
  // }
// }
@Component({
  template: `
    <h1>Dashboard</h1>
    <span>User ID: {{ userID }}</span>
  `,
  providers: [MyService]
})
export class UserDashbardComponent {
  userID: number = null;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.userID = this.myService.getUserID();
  }
}
