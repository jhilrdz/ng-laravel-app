import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-layout',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>admin-layout works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLayoutComponent {}
