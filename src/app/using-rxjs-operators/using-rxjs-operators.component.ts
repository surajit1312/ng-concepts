import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-using-rxjs-operators',
  templateUrl: './using-rxjs-operators.component.html',
})
export class UsingRxjsOperatorsComponent implements OnInit {
  users = [
    { id: 1, firstName: 'John', lastName: 'Price', isActive: true },
    { id: 2, firstName: 'Mac', lastName: 'Donalds', isActive: true },
    { id: 3, firstName: 'Nancy', lastName: 'Rohds', isActive: true },
  ];

  users$ = of(this.users);

  userNames$ = this.users$.pipe(
    map((users: any[]) => users.map((user: any) => user.firstName))
  );

  filteredUsers$ = this.users$.pipe(
    filter((users: any[]) => users.every((user: any) => user.isActive))
  );

  filteredUsersLastName$ = this.users$.pipe(
    filter((users: any[]) => users.every((user: any) => user.isActive)),
    map((users: any[]) => users.map((user: any) => user.lastName))
  );

  documentClick$ = fromEvent(document, 'click');

  data$ = combineLatest([
    this.users$,
    this.userNames$,
    this.filteredUsers$,
  ]).pipe(
    map(([users, userNames, filteredUsers]) => ({
      users,
      userNames,
      filteredUsers,
    }))
  );

  ngOnInit(): void {
    this.documentClick$.subscribe((event) => {
      console.log('DOM has been clicked', event);
    });
  }
}
