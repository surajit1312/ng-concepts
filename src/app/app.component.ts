import { Component, Inject, OnInit } from '@angular/core';
import { LogMethod } from './decorators/method.decorator';

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
  onClickTestMethodDecorator() {
    console.log('Called from inside method -> onClickTestMethodDecorator');
  }
}
