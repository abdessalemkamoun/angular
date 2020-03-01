
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoginComponent } from '../login/login.component';
import { LoopBackConfig , AccessToken} from '../shared/sdk';
import { MatToolbarModule} from '@angular/material';
import { environment } from '../../environments/environment';

import { UserApi } from '../shared/sdk/services/custom/User';
import { LoggerService } from '../shared/sdk/services/custom/logger.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any = [];
  role:string;
  constructor(private _userApi: UserApi, private router: Router) {
    LoopBackConfig.setBaseURL(environment.baseUrl);
  LoopBackConfig.setApiVersion(environment.apiVersion); }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.role = this.user.role;

  }
  ngOnDestroy() {
  }
  logout(){

    this._userApi.logout();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }




}
