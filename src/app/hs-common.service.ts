import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HsCommonService {
  private messageSource = new BehaviorSubject(true);
  currentState = this.messageSource.asObservable();
  constructor() { }
  changeState(message: boolean) {
    this.messageSource.next(message)
  }
}