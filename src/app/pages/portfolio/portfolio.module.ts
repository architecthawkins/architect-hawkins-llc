import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import {AngularMaterialModule} from '../../modules/angular-material.module';
import {DirectivesModule} from '../../directives/directives.module';
import { PhoenixDaySchoolForTheDeafComponent } from './specialty-schools/phoenix-day-school-for-the-deaf/phoenix-day-school-for-the-deaf.component';
import {LaveenElementarySchoolComponent} from './specialty-schools/laveen-elementary-school/laveen-elementary-school.component';
import { WestMECCentralCampusComponent } from './career-tech-education/west-meccentral-campus/west-meccentral-campus.component';
import { WestMecnortheastCampusComponent } from './career-tech-education/west-mecnortheast-campus/west-mecnortheast-campus.component';
import { WestMECSouthwestCampusComponent } from './career-tech-education/west-mecsouthwest-campus/west-mecsouthwest-campus.component';
import { BuckeyeElementaryMaintenanceComponent } from './support-service-facilities/buckeye-elementary-maintenance/buckeye-elementary-maintenance.component';
import { MadisonElementarySchoolDistractComponent } from './support-service-facilities/madison-elementary-school-distract/madison-elementary-school-distract.component';
import { TohonoOodhamMuseumCulturalCenterComponent } from './cultural-community/tohono-oodham-museum-cultural-center/tohono-oodham-museum-cultural-center.component';
import { HeaderCulturalCommunityComponent } from './cultural-community/header-cultural-community/header-cultural-community.component';
import { HeaderCareerTechEducationComponent } from './career-tech-education/header-career-tech-education/header-career-tech-education.component';
import { HeaderSpecialtySchoolsComponent } from './specialty-schools/header-specialty-schools/header-specialty-schools.component';
import { HeaderSupportServiceFacilitiesComponent } from './support-service-facilities/header-support-service-facilities/header-support-service-facilities.component';
import { ProjectDisclaimerComponent } from './project-disclaimer/project-disclaimer.component';


const components: any[] = [
  PhoenixDaySchoolForTheDeafComponent,
  LaveenElementarySchoolComponent,
  WestMECCentralCampusComponent,
  WestMecnortheastCampusComponent,
  WestMECSouthwestCampusComponent,
  BuckeyeElementaryMaintenanceComponent,
  MadisonElementarySchoolDistractComponent,
  TohonoOodhamMuseumCulturalCenterComponent,

  HeaderCulturalCommunityComponent,
  HeaderCareerTechEducationComponent,
  HeaderSpecialtySchoolsComponent,
  HeaderSupportServiceFacilitiesComponent,
  ProjectDisclaimerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    DirectivesModule,

    AngularMaterialModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class PortfolioModule {}
