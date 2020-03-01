/* tslint:disable */
import {
  Zone
} from '../index';

declare var Object: any;
export interface CameraInterface {
  "name"?: string;
  "addresseip"?: string;
  "id"?: any;
  "zoneId"?: any;
  zone?: Zone;
}

export class Camera implements CameraInterface {
  "name": string;
  "addresseip": string;
  "id": any;
  "zoneId": any;
  zone: Zone;
  constructor(data?: CameraInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Camera`.
   */
  public static getModelName() {
    return "Camera";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Camera for dynamic purposes.
  **/
  public static factory(data: CameraInterface): Camera{
    return new Camera(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Camera',
      plural: 'Cameras',
      path: 'Cameras',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "addresseip": {
          name: 'addresseip',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "zoneId": {
          name: 'zoneId',
          type: 'any'
        },
      },
      relations: {
        zone: {
          name: 'zone',
          type: 'Zone',
          model: 'Zone',
          relationType: 'belongsTo',
                  keyFrom: 'zoneId',
          keyTo: 'id'
        },
      }
    }
  }
}
