import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'loginsignup',
    loadChildren: () => import('../app/Pages/loginsignup/loginsignup.module').then( m => m.LoginsignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('../app/Pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('../app/Pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('../app/Pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('../app/Pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('../app/Pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'lessondetails',
    loadChildren: () => import('../app/Pages/lessondetails/lessondetails.module').then( m => m.LessondetailsPageModule)
  },
  {
    path: 'lessonrequest',
    loadChildren: () => import('../app/Pages/lessonrequest/lessonrequest.module').then( m => m.LessonrequestPageModule)
  },
  {
    path: 'instructortabs',
    loadChildren: () => import('./instructortabs/instructortabs.module').then( m => m.InstructortabsPageModule)
  },
  {
    path: 'instructor-dashboard',
    loadChildren: () => import('./instructor-dashboard/instructor-dashboard.module').then( m => m.InstructorDashboardPageModule)
  },
  {
    path: 'instructorlessondetails',
    loadChildren: () => import('./instructorlessondetails/instructorlessondetails.module').then( m => m.InstructorlessondetailsPageModule)
  },
  {
    path: 'instructorlessonrequest',
    loadChildren: () => import('./instructorlessonrequest/instructorlessonrequest.module').then( m => m.InstructorlessonrequestPageModule)
  },
  {
    path: 'instructoraccounts',
    loadChildren: () => import('./instructoraccounts/instructoraccounts.module').then( m => m.InstructoraccountsPageModule)
  },
  {
    path: 'recordedlectures',
    loadChildren: () => import('./pages/recordedlectures/recordedlectures.module').then( m => m.RecordedlecturesPageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
