import {LoopBackFilter} from '../shared/sdk/models/BaseModels';
import {FireLoopRef} from '../shared/sdk/models/FireLoopRef';
import {RealTime} from '../shared/sdk/services/core/real.time';
import { Component, OnInit } from '@angular/core';
import { EmployeeApi } from '../shared/sdk/services/custom/Employee';
import { LoopBackConfig } from '../shared/sdk';
import { environment } from '../../environments/environment';
import { Employee } from '../shared/sdk/models/Employee';
import { element } from 'protractor';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import { buffer } from 'rxjs/operator/buffer';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
employe: Employee = new Employee();
private base64textString:String="";
BASE64_MARKER = ';base64,';
employes;
  constructor(private employeeApi: EmployeeApi, private rt: RealTime) {
    LoopBackConfig.setBaseURL(environment.baseUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion);
    this.get();

  }

  filter: LoopBackFilter = {
    order: ['createdAt DESC'],
    limit: 8,
    where: {status: 1}
};
  ngOnInit() {
  }


  //convert file to base 64
  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];

  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);

  }
}

_handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.base64textString = btoa(binaryString);

          this.employe.image = btoa(binaryString);
          console.log(this.employe);
  }

  add(): void {
    console.log(this.employe);
    this.employeeApi.create(this.employe).subscribe(() => this.employe = new Employee());
    }
  get() {
    this.employeeApi.find(this.filter).subscribe((data: any) => {
      this.employes = data; // Assign array to use in HTML
      this.employes.forEach(element => {
        if(element.image){
          var datajpg = "data:image/jpg;base64," + element.image;
          element.image = datajpg;

        }

      });
    });
  }


    update(employee: Employee): void {
    this.employeeApi.upsert(employee).subscribe();
    }
    remove(balckk: Employee): void {
      this.employeeApi.deleteById(balckk.id).subscribe();
      this.get();
      }


}
