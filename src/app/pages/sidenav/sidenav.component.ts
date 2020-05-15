import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
  ) {}
  routerSub: Subscription;
  @ViewChild('snav') public sidenav: MatSidenav;
  title = `Architect Hawkins LLC`;

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

  // This will be used for closing the sidenav drawer and scrolling to the top of screen
  ngOnInit() {
    this.routerSub = this.router.events.subscribe(event => {
      if (this.sidenav && event instanceof NavigationEnd) {
        this.sidenav.close();
      }
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  // openThemeMenu() {}
  // pickColor(color: string) {
  //   let colorTheme = '';
  //   if (color !== '') {
  //     colorTheme = `-${color}`;
  //   }
  //   this.colorPicker.setColorClass(
  //     `angular-material-router-app-theme${colorTheme}`
  //   );
  // }
  snavToggle(snav) {
    snav.toggle();
  }
}
