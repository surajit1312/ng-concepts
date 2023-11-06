import { Component } from '@angular/core';

@Component({
  selector: 'app-using-templates',
  templateUrl: './using-templates.component.html',
})
export class UsingTemplatesComponent {
  article: { title: string } | null = null;

  // article = {
  //   title: 'Hello'
  // };
}
