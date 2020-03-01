import { RealTime } from './../shared/sdk/services/core/real.time';
import { User } from './../shared/sdk/models/User';
import { Component, OnInit } from '@angular/core';
import { FireLoopRef, AccessToken, ErrorHandler } from '../shared/sdk';
import { FormsModule } from '@angular/forms';


import { LoopBackConfig } from '../shared/sdk/lb.config';


import { LoopBackAuth } from '../shared/sdk/services/core/auth.service';


import { environment } from '../../environments/environment';
import { UserApi } from '../shared/sdk/services/custom/User';
import { Router } from '@angular/router';
import { LoggerService } from '../shared/sdk/services/custom/logger.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  private reference: FireLoopRef<User>;
  role: any = [{name: 'admin'}, {name: 'res'} , {name: 'agent'}];
  role2: string;
  constructor(private _userApi: UserApi, private router: Router  ,private log: LoggerService , private eur : ErrorHandler) {
    LoopBackConfig.setBaseURL(environment.baseUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion);

  }

  ngOnInit() {
    console.log(this.user.role);
  }

  private signup(): void {

   this._userApi.create(this.user).subscribe((user: User) => console.log(user));
  }
  private signin(): void {
    this._userApi.login(this.user).subscribe((token: AccessToken) => this.router.navigate(['employee']));
  }

}
