import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-west-mecnortheast-campus',
  templateUrl: './west-mecnortheast-campus.component.html',
  styleUrls: ['./west-mecnortheast-campus.component.scss']
})
export class WestMecnortheastCampusComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('West-MEC Northeast Campus - Career & Technical Education | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'West-MEC Northeast Campus, Phoenix AZ - 94,000 SF renovation and new build featuring Health Sciences, Auto Technology, and Veterinary Sciences.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/west-mec-northeast-campus');
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
