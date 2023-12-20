import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './navbar.component.html',
  styles: `
  .spacer {
    margin: 0 auto;
  }
  `,
})
export class NavbarComponent {}
