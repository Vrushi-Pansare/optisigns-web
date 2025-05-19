import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
      header?.classList.add('header-shadow');
    } else {
      header?.classList.remove('header-shadow');
    }
  }
}
