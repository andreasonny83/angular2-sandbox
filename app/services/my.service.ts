import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class MyService {
  private sub: any;
  userID: number = null;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      this.userID = +params['id'];
    });
  }

  getUserID() {
    return this.userID;
  }
}
