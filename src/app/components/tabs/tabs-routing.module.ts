import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../Pages/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('../../Pages/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../../Pages/tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../Pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      // {
      //   path: 'instructor-dashboard',
      //   loadChildren: () => import('../../Pages/instructor-dashboard/instructor-dashboard.module').then(m => m.InstructorDashboardPageModule)
      // },
      {
        path: 'instructorlessonrequest',
        loadChildren: () => import('../../instructorlessonrequest/instructorlessonrequest.module').then(m => m.InstructorlessonrequestPageModule)
      },
      // {
      //   path: 'instructoraccounts',
      //   loadChildren: () => import('../../Pages/tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () => import('../../Pages/settings/settings.module').then(m => m.SettingsPageModule)
      // },
      // {
      //   path: 'Instructordashboard',
      //   loadChildren: () => import('../../Pages/Instructor-dashboard/Instructor-dashboard.module').then(m => m.InstructorDashboardPageModule)
      // },
      // {
      // path:'editprofile',
      // loadChildren:()=>import('../editprofile/editprofile.module').then(m => m.EditprofilePageModule)
      // },

      {
        path: 'home',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
