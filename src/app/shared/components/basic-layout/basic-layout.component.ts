import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-basic-layout',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   NavbarComponent,
  //   FooterComponent
  // ],  ==> SharedModule'de Footer ile declarations kısmında, navbar ile de import kısmında etkileşimli oldukları için Navbar ve Footer componentlerin import edilmesine gerek kalmadı. CommonModule de SharedModule'de import edildiği için yine bu componentin de import edilmesine gerek kalmadı
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicLayoutComponent {
  now = new Date();
 }
