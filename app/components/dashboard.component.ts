import { Component } from '@angular/core';
import { provideRouter, RouterConfig, ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    Dashboard
  `
})
export class UserDashbardComponent {
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];

      console.log('page:', id);
    });
  }
}
