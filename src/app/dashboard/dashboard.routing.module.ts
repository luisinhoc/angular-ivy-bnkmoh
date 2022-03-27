import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';
import { DashboardNephewComponent } from './dashboard-nephew/dashboard-nephew.component';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'child', component: DashboardChildComponent },
      { path: 'nephew', component: DashboardNephewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
