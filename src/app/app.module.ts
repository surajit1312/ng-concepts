import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingSignalsComponent } from './using-signals/using-signals.component';

@NgModule({
  declarations: [AppComponent, UsingSignalsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: 'MyInjectService',
      useFactory: () => {
        return {
          sayHello: () => {
            console.log('Hello from MyInjectService');
          },
        };
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
