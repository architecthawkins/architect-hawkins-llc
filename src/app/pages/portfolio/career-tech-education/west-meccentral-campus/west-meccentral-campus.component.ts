import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-west-meccentral-campus',
  templateUrl: './west-meccentral-campus.component.html',
  styleUrls: ['./west-meccentral-campus.component.scss']
})
export class WestMECCentralCampusComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('West-MEC Central Campus - Career & Technical Education | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'West-MEC Central Campus, Glendale AZ - 38,000 SF building featuring avionics, welding, and CNC labs. Architecture by Elizabeth Hawkins.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/west-mec-central-campus');
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
