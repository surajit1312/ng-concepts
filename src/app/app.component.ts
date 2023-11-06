import { Component, Inject, OnInit } from '@angular/core';
import { LogMethod } from './decorators/method.decorator';
import { LogClass } from './decorators/class.decorator';
import { LogProperty } from './decorators/property.decorator';
import { LogParam } from './decorators/parameter.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @LogProperty()
  counter: number = 0;
  constructor(@Inject('MyInjectService') private myService: any) {}

  ngOnInit(): void {
    this.myService.sayHello();
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
}

@LogClass({ prefix: 'Hello' })
export class TestClass {}
