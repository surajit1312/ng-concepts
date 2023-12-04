import { Component, Inject, OnInit } from '@angular/core';
import { LogMethod } from './decorators/method.decorator';
import { LogClass } from './decorators/class.decorator';
import { LogProperty } from './decorators/property.decorator';
import { LogParam } from './decorators/parameter.decorator';
import { MyLogger } from './decorators/method/logger.decorator';
import { MyClass } from './decorators/class/prefix.decorator';
import { MyProperty } from './decorators/properties/prop.decorator';
import { MyParam } from './decorators/params/log-param.decorator';
import { Observable, filter, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @LogProperty()
  counter: number = 0;
  constructor(
    @Inject('MyInjectService') private myService: any,
    @Inject('MyDocumentToken') private documentService: any
  ) {}

  @MyProperty({ prefix: true })
  myProps: number = 0;

  users: any = {
    userId: '123',
    companyId: 'epi',
  };

  companies: Array<any> = [
    {
      companyId: 'vmw',
      salary: 1000,
    },
    {
      companyId: 'epi',
      salary: 1200,
    },
  ];

  companies$!: Observable<Array<any>>;
  user$!: Observable<any>;

  ngOnInit(): void {
    this.myService.sayHello();
    this.documentService.getDocument();
    this.companies$ = of(this.companies);
    this.user$ = of(this.users);
    const filteredUser$ = this.user$
      .pipe(
        mergeMap((user: any) => {
          return this.companies$
            .pipe(map((companies: any) => {
              return companies.filter((comp: any) => comp.companyId === user.companyId);
            }));
        })
      );

    filteredUser$.subscribe(data => {
      console.log(data);
    });
  }

  @LogMethod({ shouldLogTime: true })
  onClickTestMethodDecorator(): void {
    console.log('Called from inside method -> onClickTestMethodDecorator');
  }

  createClass(): void {
    const testClass: TestClass = new TestClass();
    console.log('Test class has been created', testClass);
  }

  onClickTestClassDecorator(): void {
    this.createClass();
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  onClickTestParamDecorator(x: any, @LogParam() y: any): void {
    console.log(x, y);
  }

  @MyLogger({ showTime: true })
  onClickMethodDecorator(@MyParam() p1: string) {
    console.log('From Method Decorator', this.myProps, p1);
  }
}

@MyClass({ addPrefix: true })
export class TestClass {}
