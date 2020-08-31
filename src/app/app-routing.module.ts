import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/components/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'loginsignup',
    loadChildren: () => import('../app/Pages/loginsignup/loginsignup.module').then( m => m.LoginsignupPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('../app/Pages/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'intro',
    loadChildren: () => import('../app/Pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('../app/Pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'changepassword',
    loadChildren: () => import('../app/Pages/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'settings',
    loadChildren: () => import('../app/Pages/settings/settings.module').then( m => m.SettingsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'lessondetails',
    loadChildren: () => import('../app/Pages/lessondetails/lessondetails.module').then( m => m.LessondetailsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'requestlesson',
    loadChildren: () => import('../app/Pages/lessonrequest/lessonrequest.module').then( m => m.LessonrequestPageModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: 'instructortabs',
  //   loadChildren: () => import('./instructortabs/instructortabs.module').then( m => m.InstructortabsPageModule)
  // },
  {
    path: 'instructorlessondetails',
    loadChildren: () => import('./instructorlessondetails/instructorlessondetails.module').then( m => m.InstructorlessondetailsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'instructorlessonrequest',
    loadChildren: () => import('./instructorlessonrequest/instructorlessonrequest.module').then( m => m.InstructorlessonrequestPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'instructoraccounts',
    loadChildren: () => import('./instructoraccounts/instructoraccounts.module').then( m => m.InstructoraccountsPageModule),
    canActivate:[AuthGuard]
  },
  // {
  //   path: 'recordedlectures',
  //   loadChildren: () => import('./pages/recordedlectures/recordedlectures.module').then( m => m.RecordedlecturesPageModule),
  //   canActivate:[AuthGuard]
  // },
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
