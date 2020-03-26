import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  obs: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.obs = Observable.create( observer => {
      let count = 0;
      setInterval( () => {
        if (count > 5) {
          observer.error(new Error( 'count > 5' ));
        }
        observer.next(count++);
      } , 1000 );
    });
    this.obs.pipe( filter( ( data: number ) => {return data % 2 === 0;} ) ).subscribe(
      data => {console.log(data)},
      error => console.log(error.message));
  }

  ngOnDestroy(): void {
    // this.obs.unsubscribe();
  }

}
