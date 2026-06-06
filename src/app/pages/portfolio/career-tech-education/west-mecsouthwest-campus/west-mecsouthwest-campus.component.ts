import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-west-mecsouthwest-campus',
  templateUrl: './west-mecsouthwest-campus.component.html',
  styleUrls: ['./west-mecsouthwest-campus.component.scss']
})
export class WestMECSouthwestCampusComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('West-MEC Southwest Campus - Award-Winning CTE Campus | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'West-MEC Southwest Campus, Buckeye AZ - Award-winning 4-phase campus. 2015 WESTMARC Excellence in Innovation & 2018 AIA Arizona Goodwin Award.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/west-mec-southwest-campus');
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
