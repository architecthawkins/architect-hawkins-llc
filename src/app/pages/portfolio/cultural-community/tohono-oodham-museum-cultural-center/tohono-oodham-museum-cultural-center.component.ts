import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tohono-oodham-museum-cultural-center',
  templateUrl: './tohono-oodham-museum-cultural-center.component.html',
  styleUrls: ['./tohono-oodham-museum-cultural-center.component.scss']
})
export class TohonoOodhamMuseumCulturalCenterComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tohono O\'odham Museum & Cultural Center | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'Tohono O\'odham Nation Museum and Cultural Center, Topawa AZ - 35,000 SF museum and 5,000 SF cultural center with outdoor courtyard for cultural events.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/tohono-ooham-museum');
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
