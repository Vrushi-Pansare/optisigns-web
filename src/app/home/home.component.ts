import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private modalService = inject(NgbModal);
  currentSlideIndex = 0;
  faqs = [
    {
      question: 'What Is Digital Signage Software?',
      answer: `Digital signage software, also called digital sign software, is a platform that helps you manage and display content on screens such as TVs, monitors, and kiosks. It includes a content management system (CMS) to organize and publish media, along with additional features specifically designed for screen-based communication.

These features allow you to schedule content, control screens remotely, create content playlists, and update messages in real time. The software often integrates with tools like workplace apps, data dashboards, and social media feeds. Digital signage software is purpose-built for sharing announcements, promotions, dashboards, or interactive content across multiple locations and devices.`,
    },
    {
      question: 'How Does Digital Signage Software Work?',
      answer: `Digital sign software lets you create, manage, and schedule content like graphic designs, messages, or videos to share on screens over the internet.

      With our cloud-based software for digital signage, you can control content remotely across any number of screens or locations. It supports various file formats, giving you the freedom to mix content types and design digital displays that align with your business goals.

      Our flexible digital signage platform empowers businesses of all sizes to communicate effectively, whether they’re sharing promotions, meeting schedules, or internal announcements with the right audience at the right time.`,
    },
    {
      question: 'How Easy Is It To Set Up Digital Sign Software?',
      answer: `Setting up digital sign software is simple. Start by choosing a compatible device or screen and following the setup instructions for your digital signage software solution. Once connected, you can upload your content and assign it to the appropriate screen or display.

      Our digital signage solutions feature a user-friendly interface with drag-and-drop tools and push-to-screens functionality, making it easy to deliver your message to the right audience. Anyone on your team can customize and publish content in minutes, regardless of your business size or industry.


     If you have any questions, visit our Knowledge Base, or contact our support team at support@optisigns.com.`,
    },
    {
      question:
        'What Kind Of Content Can Be Displayed With Digital Signage Software ',
      answer: `Our digital signage content management software allows your business to display dynamic and engaging content, including videos, slideshows, images, and text messages. You can showcase live weather forecasts, news updates, social media posts, promotional materials such as event announcements and menus, meeting schedules, employee recognition messages, and company news.

      Thanks to our digital signage software’s flexibility in supporting various file formats, you can mix and match different content types into playlists to create powerful displays that capture your audience’s attention and maximize impact.`,
    },
    {
      question:
        'How Reliable Is Digital Sign Software For Continuous Operation',
      answer: `Our digital signage software can be operated continuously for extended periods without any issues, making it ideal for businesses that need reliable communication around the clock. With 24/7-rated hardware, your screens can run uninterrupted without issues.


     OptiSigns offers automatic updates, remote troubleshooting capabilities, and reliable customer support to ensure your digital signage network stays up and running. No matter where your audience is, you’ll have the tools to deliver the right message at any time.`,
    },
    // ...aur bhi FAQ objects
  ];

  combinedItems = [
    {
      id: '1',
      image: '../../assets/2nd.png',
      icon: '../../assets/zoom.png',
    },
    {
      id: '2',
      image: '../../assets/get-yours-today.jpeg',
      icon: '../../assets/text.icon.jpg',
    },
    {
      id: '3',
      image: '../../assets/6th.png',
      icon: '../../assets/microsoft.jpg',
    },
    {
      id: '4',
      image: '../../assets/sun img.png',
      icon: '../../assets/sun icon.png',
    },
    {
      id: '5',
      image: '../../assets/5th.png',
      icon: '../../assets/Google_Calendar_icon_(2020).svg.png',
    },
    {
      id: '6',
      image: '../../assets/4th.png',
      icon: '../../assets/insta icon.avif',
    },
  ];

  constructor() {
    console.log('Combined Items:', this.combinedItems);
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 0) {
      header?.classList.add('header-shadow');
    } else {
      header?.classList.remove('header-shadow');
    }
  }

  openLg(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'lg' });
  }

  closeModal() {
    const modal = document.getElementById('videoModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  activeIndex: number | null = null;

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
