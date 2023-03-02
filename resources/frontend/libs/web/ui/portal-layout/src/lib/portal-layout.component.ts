import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portal-layout',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>portal-layout works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortalLayoutComponent {}
