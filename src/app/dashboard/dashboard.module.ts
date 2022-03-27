import { NgModule } from '@angular/core';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';
import { DashboardNephewComponent } from './dashboard-nephew/dashboard-nephew.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
  imports: [DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    DashboardChildComponent,
    DashboardNephewComponent,
  ],
})
export class DashboardModule {}
