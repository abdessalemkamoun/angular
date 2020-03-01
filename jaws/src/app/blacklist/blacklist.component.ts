import { Component, OnInit } from '@angular/core';
import { Blaclist } from '../shared/sdk/models/Blaclist';
import { LoopBackConfig, LoopBackFilter } from '../shared/sdk';
import { environment } from '../../environments/environment';
import { BlaclistApi } from '../shared/sdk/services/custom/Blaclist';
import { RealTime } from '../shared/sdk/services/core/real.time';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss']
})
export class BlacklistComponent implements OnInit {

  black: Blaclist = new Blaclist();
private base64textString:String='';
BASE64_MARKER = ';base64,';
blacks;
  constructor(private blaclistApi: BlaclistApi, private rt: RealTime) {
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

          this.black.image = btoa(binaryString);
          console.log(this.black);
  }

  add(): void {
    console.log(this.black);
    this.blaclistApi.create(this.black).subscribe(() => this.black = new Blaclist());
    }
  get() {
    this.blaclistApi.find(this.filter).subscribe((data: any) => {
      this.blacks = data; // Assign array to use in HTML
      this.blacks.forEach(element => {
        if(element.image){
          var datajpg = 'data:image/jpg;base64,' + element.image;
          element.image = datajpg;

        }

      });
    });
  }


    update(balckk: Blaclist): void {
    this.blaclistApi.upsert(balckk).subscribe();
    }
    remove(balckk: Blaclist): void {
    this.blaclistApi.deleteById(balckk.id).subscribe();
    this.get();
    }


}
