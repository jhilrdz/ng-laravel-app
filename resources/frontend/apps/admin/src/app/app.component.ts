
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'admin-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'admin';
}
