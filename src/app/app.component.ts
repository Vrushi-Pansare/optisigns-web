import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'SmartPlayer';
  Logo = '../assets/Asset_3.png';
  isScrolled = false;
  isMenuOpen = false;
  isProductsOpen = false;
  isIndustriesOpen = false;
  slides = [
    {
      lid: 'tild6165-6636-4762-b630-633864396361',
      li_img: '../assets/application-06.jpg',
      li_imgalt: '',
      li_imgtitle: '',
      li_imgurl: '',
      li_imgtarget: '',
      li_imgnofollow: '',
      li_youtube: '',
      li_vimeo: '',
    },
    {
      lid: 'tild3131-3262-4130-b235-616230316331',
      li_img: '../assets/application-03.jpg',
      li_imgalt: '',
      li_imgtitle: '',
      li_imgurl: '',
      li_imgtarget: '',
      li_imgnofollow: '',
      li_youtube: '',
      li_vimeo: '',
    },
    {
      lid: 'tild3162-3766-4735-b633-636133376462',
      li_img: '../assets/application-04.jpg',
      li_imgalt: '',
      li_imgtitle: '',
      li_imgurl: '',
      li_imgtarget: '',
      li_imgnofollow: '',
      li_youtube: '',
      li_vimeo: '',
    },
    {
      lid: 'tild3162-3766-4735-b633-636133376462',
      li_img: '../assets/application.png',
      li_imgalt: '',
      li_imgtitle: '',
      li_imgurl: '',
      li_imgtarget: '',
      li_imgnofollow: '',
      li_youtube: '',
      li_vimeo: '',
    },
  ];

  currentSlideIndex = 0;
  currentProjectIndex = 0;

  projects = [
    {
      name: 'Advon  ',
      image: '../assets/Advon.jpg',
      Location:
        'With Exivision, we are able to send real time updates of our company pricing, marketing collateral and schemes to the Distributors on a real time basis.',
    },
    {
      name: 'Kumar Rasoi',
      image: '../assets/Kumar.jpg',
      Location:
        'With the help of Exivision, we are now able to showcase deal of the day, Cheff Recommendation and Discounting on different items at different outlets with one single click.',
    },
  ];

  activeIndustry = 'retail'; // Default to retail

  industryImages = {
    retail: '../assets/retail.jpg',
    banks: '../assets/bank.jpg',
    education: '../assets/edu.jpg',
    horeca: '../assets/horeca.jpg',
    gas: '../assets/gas.jpg',
    healthcare: '../assets/med.jpg',
    offices: '../assets/corp.jpg',
    sports: '../assets/sport.jpg',
  };

  // Add this listener for scrolling
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    // Change state based on scroll position (50px threshold)
    this.isScrolled = scrollPosition > 50;
  }

  // Add this method
  setActiveIndustry(industry: string) {
    this.activeIndustry = industry;
  }

  ngOnInit() {
    // Auto-cycle through slides every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Add these methods back to fix template errors
  nextProject() {
    this.currentProjectIndex =
      (this.currentProjectIndex + 1) % this.projects.length;
  }

  prevProject() {
    this.currentProjectIndex =
      (this.currentProjectIndex - 1 + this.projects.length) %
      this.projects.length;
  }

  setCurrentProject(index: number) {
    this.currentProjectIndex = index;
  }
}
