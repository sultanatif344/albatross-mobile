// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { InstructortabsPage } from './instructortabs.page';

// const routes: Routes = [
//   {
//     path: 'instructortabs',
//     component: InstructortabsPage,
//     children: [
//       {
//         path: 'Instructor-dashboard',
//         loadChildren: () => import('../../app/instructor-dashboard/instructor-dashboard.module').then(m => m.InstructorDashboardPageModule)
//       },
//       {
//         path: 'LessonRequest',
//         loadChildren: () => import('../../app/instructorlessonrequest/instructorlessonrequest.module').then(m => m.InstructorlessonrequestPageModule)
//       },
//       {
//         path: 'account',
//         loadChildren: () => import('../../app/instructoraccounts/instructoraccounts.module').then(m => m.InstructoraccountsPageModule)
//       },
//       {
//         path: 'settings',
//         loadChildren: () => import('../../app/Pages/settings/settings.module').then(m => m.SettingsPageModule)
//       },
//       // {
//       //   path: 'Instructordashboard',
//       //   loadChildren: () => import('../../Pages/Instructor-dashboard/Instructor-dashboard.module').then(m => m.InstructorDashboardPageModule)
//       // },
//       // {
//       // path:'editprofile',
//       // loadChildren:()=>import('../editprofile/editprofile.module').then(m => m.EditprofilePageModule)
//       // },

//       {
//         path: 'instructortabs',
//         redirectTo: '/instructortabs/Instructor-dashboard',
//         pathMatch: 'full'
//       },
//     ]
//   },
//   {
//     path: 'instructortabs',
//     redirectTo: '/instructortabs/Instructor-dashboard',
//     pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports:
//     [
//       RouterModule.forChild(routes)
//     ],
//   exports:
//     [
//       RouterModule
//     ]
// })
// export class InstructortabsPageRoutingModule {}