import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-buckeye-elementary-maintenance',
  templateUrl: './buckeye-elementary-maintenance.component.html',
  styleUrls: ['./buckeye-elementary-maintenance.component.scss']
})
export class BuckeyeElementaryMaintenanceComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Buckeye Elementary School District - Support Service Facilities | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'Buckeye Elementary School District #33, Buckeye AZ - 19,000 SF District Office and 13,200 SF Maintenance/Transportation Facility. Architecture by Elizabeth Hawkins.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/buckeye-elementary-maintenance');
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
