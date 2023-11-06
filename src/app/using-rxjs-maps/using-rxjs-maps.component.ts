import { Component, OnInit } from '@angular/core';
import {
  Observable,
  concatMap,
  delay,
  exhaustMap,
  flatMap,
  from,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';

export interface UserInterface {
  id: string;
  name: string;
}

@Component({
  selector: 'app-using-rxjs-maps',
  templateUrl: './using-rxjs-maps.component.html',
})
export class UsingRxjsMapsComponent implements OnInit {
  example: any;
  users: UserInterface[] = [
    {
      id: '97865',
      name: 'Elsa',
    },
    {
      id: '9876',
      name: 'Moana',
    },
  ];

  constructor() {}
  usingMap$: Observable<string> = from([1, 2, 3, 4, 5]).pipe(
    map((item: any) => 'Button ' + item * 10)
  );

  usingMergeMap$ = from([0, 1, 2, 3, 4]).pipe(
    mergeMap((item: any) => of(item).pipe(delay(5000)))
  );

  usingFlatMap$ = from([7, 8, 9, 10]).pipe(
    flatMap((item: any) => of(item).pipe(delay(8000)))
  );

  usingConcatMap$ = from([20, 21, 22, 23]).pipe(
    concatMap((item: any) => of(item).pipe(delay(9000)))
  );

  usingSwitchMap$ = from([71, 72, 73, 74, 75]).pipe(
    switchMap((item: any) => of(item).pipe(delay(20000)))
  );

  usingExhaustMap$ = from([100, 101, 102]).pipe(
    exhaustMap((item: any) => of(item).pipe(delay(20000)))
  );

  getUser(id: string) {
    const user = this.users.find((user) => user.id === id)!;
    return of(user);
  }

  getUserDetails(user: UserInterface) {
    return of({ id: user.id, age: 30 });
  }

  ngOnInit(): void {
    this.usingMap$.subscribe((val) => {
      console.log(val);
    });
    this.usingMergeMap$.subscribe(
      (val) => {
        console.log('RxJS Example MergeMap ---> ', val);
      },
      () => {},
      () => {
        console.log(`MergeMap task completed`);
      }
    );
    this.usingFlatMap$.subscribe(
      (val) => {
        console.log('RxJS Example FlatMap ---> ', val);
      },
      () => {},
      () => {
        console.log(`FlatMap task completed`);
      }
    );
    this.usingConcatMap$.subscribe(
      (val) => {
        console.log('RxJS Example ConcatMap ---> ', val);
      },
      () => {},
      () => {
        console.log(`ConcatMap task completed`);
      }
    );
    this.usingSwitchMap$.subscribe(
      (val) => {
        console.log('RxJS Example SwitchMap ---> ', val);
      },
      () => {},
      () => {
        console.log(`SwitchMap task completed`);
      }
    );
    this.usingExhaustMap$.subscribe(
      (val) => {
        console.log('RxJS Example SwitchMap ---> ', val);
      },
      () => {},
      () => {
        console.log(`ExhaustMap task completed`);
      }
    );
    const getUser$ = this.getUser('9876').pipe(
      concatMap((user) => this.getUserDetails(user))
    );
    getUser$.subscribe((val) => {
      console.log('User Details: ', val);
    });
  }
}
