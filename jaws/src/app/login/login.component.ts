import { Component, OnInit } from '@angular/core';
import { UserApi } from '../shared/sdk/services/custom/User';
import { LoggerService } from '../shared/sdk/services/custom/logger.service';
import { Router } from '@angular/router';
import { AccessToken, LoopBackConfig } from '../shared/sdk';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 credential = {username : '', password: ''};

  constructor(private _userApi: UserApi, private router: Router) {
      LoopBackConfig.setBaseURL(environment.baseUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion); }

  ngOnInit() {
  }


login () {
  this._userApi.login(this.credential).subscribe((token: AccessToken) => {
    localStorage.setItem('user', JSON.stringify(token.user));
    localStorage.setItem('profile', JSON.stringify(token));
    this.router.navigate(['home']);
  });
}
}
