import { Component, OnInit, Input } from '@angular/core';
import { LoopBackFilter, Zone, Camera, ZoneApi, LoopBackConfig } from '../shared/sdk';
import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  displayDialog: boolean;
  selectedZone: Zone;

  public myCamData = [];

  visibility: string;
  route: any;
  filter: LoopBackFilter = {
    order: ['createdAt DESC'],
    limit: 8,
    where: { status: 1 }
  };
  newZone: boolean;
  zones = [];
  cameras = [];
  cameramodal: boolean;
  cameramodalCreate: boolean;
  zoneModalUpdate:boolean;
  zoneModalCreate:boolean;
  myCamDataModal: any = [];
  zoneIdAdd: string;
  cameraAdd = {name: "", addresseip: ""};
  zoneAdd ={name:""};
  constructor(
    private zoneApi: ZoneApi
  ) {
    LoopBackConfig.setBaseURL(environment.baseUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion);
  }
zon="";

  ngOnInit() {
this.getZone();
  }
  getZone(): void {
    this.zoneApi.find()
      .subscribe(zones => {
        this.zones = zones;
       zones.forEach(zone => {

          this.zoneApi.getCameras(zone.id, { 'include': ['cameras'] }).subscribe(
            cameras => {

              cameras.forEach(cam => {
                console.log(cam);
                this.myCamData = [];
                const c = this.zoneApi.findByIdCameras(zone.id, cam.id).subscribe((ca) => { this.myCamData.push(ca);
                  console.log(this.myCamData);
                  for (let i = 0; i < this.zones.length; i++) {
                    this.zones[i].cameras = [];
                    for (let j = 0; j < this.myCamData.length; j++) {
                        if ( this.zones[i].id === this.myCamData[j].zoneId ) {
                          console.log(this.zones[i]); console.log(this.myCamData[j]);
                          this.zones[i].cameras.push(this.myCamData[j]);
                        }
                    }
                  }
                });
              });
            }
          );

        });
      });
  }
  submitCamera(cameraAdd) {
    this.zoneApi.createCameras(this.zoneIdAdd, cameraAdd).subscribe(data => {console.log(data);
      this.cameramodalCreate = false;
      this.getZone();
      this.cameraAdd = {name: "", addresseip: ""};
    })
  }
  submitZonne(zoneAdd){
    this.zoneApi.create(zoneAdd).subscribe();
    this.zoneModalCreate = false;
    this.getZone();
    this.zoneAdd = {name: ""};
  }


  updateCamera(cam) {
    this.zoneApi.updateByIdCameras(cam.zoneId, cam.id, cam).subscribe(data => {console.log(data); });
  }
  updatezone(zon){
    this.zoneApi.updateAttributes(zon.id, zon).subscribe();
    this.zon= "";
    this.getZone();
    this.zoneModalUpdate=false;
  }
  DeleteCam(cam) {
    const idZone = cam.zoneId;
    console.log(cam);
    this.zoneApi.destroyByIdCameras(cam.zoneId, cam.id).subscribe(data => {this.showCamera(idZone); this.getZone(); console.log(this.myCamDataModal); })
  }
  deleteZone(id) {
    this.zoneApi.deleteById(id).subscribe();
    this.getZone();
  }
  showCamera(id) {
    this.myCamDataModal = []
    console.log(id);
    this.cameramodal = true;
    this.zoneApi.getCameras(id, { 'include': ['cameras'] }).subscribe(
      cameras => {
        cameras.forEach(cam => {
          const c = this.zoneApi.findByIdCameras(id, cam.id).subscribe(ca => { this.myCamDataModal.push(ca);
            for (let i = 0; i < this.myCamDataModal.length; i++) {
              this.myCamDataModal[i].zoneId = id;
            }
            console.log(this.myCamDataModal);
          });
        });
      }
    );
  }
  showCameraAdd(id) {
    this.cameramodalCreate = true;
    this.zoneIdAdd = id;
  }
  ShowZone(id){
    this.zoneModalUpdate = true;
    this.zoneApi.findById(id).subscribe(data => {this.zon = data; });
    console.log(this.zon);
    this.zon="";

      }

ajoutZone(){
  this.zoneModalCreate = true;
}
  closeCamerCreate() {
    this.cameramodalCreate = false;
    this.cameraAdd = {name: "", addresseip: ""};
  }
  closeZoneCreate(){
    this.zoneModalCreate = false;
    this.zoneAdd = {name: ""};
  }
  closeZoneUpdate(){
    this.zoneModalUpdate = false;

  }
  closeCamer() {
    this.cameramodal = false;
    this.myCamDataModal = [];
  }





}
