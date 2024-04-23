import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public mainLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public uploadProgressBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
  }
}
