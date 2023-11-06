import { Component, Inject, OnInit } from '@angular/core';
import { LogMethod } from './decorators/method.decorator';
import { LogClass } from './decorators/class.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
}

@LogClass({ prefix: 'Hello' })
export class TestClass {}
