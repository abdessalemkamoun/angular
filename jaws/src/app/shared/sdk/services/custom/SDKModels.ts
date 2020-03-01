/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Zone } from '../../models/Zone';
import { Camera } from '../../models/Camera';
import { Blaclist } from '../../models/Blaclist';
import { Employee } from '../../models/Employee';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Zone: Zone,
    Camera: Camera,
    Blaclist: Blaclist,
    Employee: Employee,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
