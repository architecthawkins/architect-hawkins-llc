import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-laveen-elementary-school',
  templateUrl: './laveen-elementary-school.component.html',
  styleUrls: ['./laveen-elementary-school.component.scss']
})
export class LaveenElementarySchoolComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Laveen Elementary School District - Specialty Schools | Architect Hawkins LLC');
    this.metaService.updateTag({ name: 'description', content: 'Laveen Elementary School District #59, Laveen AZ - 96,613 SF four-building campus designed with butterfly motif concept. Architecture by Elizabeth Hawkins.' });
    this.updateCanonical('https://architecthawkins.com/portfolio/laveen-elementary-for-the-deaf');
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
