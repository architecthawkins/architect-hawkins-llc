import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioSpecialtySchoolsComponent} from "./Depracated/portfolio-specialty-schools/portfolio-specialty-schools.component";
import {PortfolioServiceFacilitiesComponent} from "./Depracated/portfolio-service-facilities/portfolio-service-facilities.component";
import {PortfolioTechnicalEducationComponent} from "./Depracated/portfolio-technical-education/portfolio-technical-education.component";
import {PortfolioCommunityComponent} from "./Depracated/portfolio-community/portfolio-community.component";


export const PORFILE_PATHS = {
  PORTFOLIO: 'portfolio',
  CHILD_PORTFOLIO_SPECIALITY: 'specialty-schools',
  CHILD_PORTFOLIO_TECH_EDUCATION: 'technical-education',
  CHILD_PORTFOLIO_FACILITIES: 'service-facilities',
  CHILD_PORTFOLIO_COMMUNITY: 'cultural-community',
}


//todo: THIS ROUTE SETup FOR CHILDREN IS NOT RIGHT BUT GOT TI TO WORK FOR NOW....
const routes: Routes = [
  {
    path: 'undefined',
    redirectTo: ''
  },
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_SPECIALITY,
    component: PortfolioSpecialtySchoolsComponent
  },
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_TECH_EDUCATION,
    component: PortfolioTechnicalEducationComponent
  },
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_FACILITIES,
    component: PortfolioServiceFacilitiesComponent
  },
  {
    path: PORFILE_PATHS.CHILD_PORTFOLIO_COMMUNITY,
    component: PortfolioCommunityComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
