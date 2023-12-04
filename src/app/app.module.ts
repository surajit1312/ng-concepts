import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingSignalsComponent } from './using-signals/using-signals.component';
import { UsingRxjsMapsComponent } from './using-rxjs-maps/using-rxjs-maps.component';
import { UsingRxjsOperatorsComponent } from './using-rxjs-operators/using-rxjs-operators.component';
import { UsingTemplatesComponent } from './using-templates/using-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingSignalsComponent,
    UsingRxjsMapsComponent,
    UsingRxjsOperatorsComponent,
    UsingTemplatesComponent,
  ],
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
    {
      provide: 'MyDocumentToken',
      useFactory:() => {
        return {
          getDocument: () => {
            console.log('Hello from MyDocumentToken');
          }
        };
      },
    },
    Window
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
