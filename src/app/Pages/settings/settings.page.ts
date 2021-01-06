import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Logout } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router:Router
    , private navController: NavController
    , private store:Store<AppState>
    ,private http:HttpClient
    ,private auth:AuthService
    ,private iab:InAppBrowser
    ) { }

  title:string;
  public flag:Boolean;
  ngOnInit() {
    this.title = "Settings";
  }


  goBack(){
    this.navController.back();
  }

  logout(){
    this.store.dispatch(new Logout())
  }

  goToChangePassword(){
    this.router.navigateByUrl('changepassword')
  }


  connectWithGoogle(){
    const googleConnectURL = "https://albatross-v1.herokuapp.com/api/v1/auth/google";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.auth.getToken()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })
  
    this.http.get(googleConnectURL,{headers:headers}).subscribe((data:any)=>{
      this.iab.create(data.url);
    })
  }
}
