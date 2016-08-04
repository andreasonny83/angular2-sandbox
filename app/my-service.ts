import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/Rx';

export interface LabelledValue {
  label: string;
}

@Injectable()
export class MyService {
  constructor() {}

  verify() {
    console.log('verifying');
  }
}
