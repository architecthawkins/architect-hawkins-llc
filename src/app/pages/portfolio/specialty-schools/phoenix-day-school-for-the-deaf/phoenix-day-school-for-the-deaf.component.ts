import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-phoenix-day-school-for-the-deaf',
  templateUrl: './phoenix-day-school-for-the-deaf.component.html',
  styleUrls: ['./phoenix-day-school-for-the-deaf.component.scss']
})
export class PhoenixDaySchoolForTheDeafComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Phoenix Day School for the Deaf - Specialty Schools | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'Phoenix Day School for the Deaf, Phoenix AZ - 51,286 SF facility. 2008 Governor\'s Achievement Award for Innovative School Design: Accessibility for All.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/phoenix-day-school-for-the-deaf');
  }

  private updateCanonical(url: string): void {
    let link: HTMLLinkElement = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

}
