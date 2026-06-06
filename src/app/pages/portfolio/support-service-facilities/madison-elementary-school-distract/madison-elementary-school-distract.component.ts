import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-madison-elementary-school-distract',
  templateUrl: './madison-elementary-school-distract.component.html',
  styleUrls: ['./madison-elementary-school-distract.component.scss']
})
export class MadisonElementarySchoolDistractComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Madison Elementary School District Warehouse | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'Madison Elementary School District #38 Warehouse, Phoenix AZ - 12,320 SF. 2018 VP Building Hall of Fame: Warehouse Category. Architecture by Elizabeth Hawkins.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/madison-elementary-school');
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
