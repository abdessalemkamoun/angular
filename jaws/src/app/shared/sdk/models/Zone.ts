/* tslint:disable */
import {
  Camera
} from '../index';

declare var Object: any;
export interface ZoneInterface {
  "name"?: string;
  "id"?: any;
  cameras?: Camera[];
}

export class Zone implements ZoneInterface {
  "name": string;
  "id": any;
  cameras: Camera[];
  constructor(data?: ZoneInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Zone`.
   */
  public static getModelName() {
    return "Zone";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Zone for dynamic purposes.
  **/
  public static factory(data: ZoneInterface): Zone{
    return new Zone(data);
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
      name: 'Zone',
      plural: 'Zones',
      path: 'Zones',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        cameras: {
          name: 'cameras',
          type: 'Camera[]',
          model: 'Camera',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'zoneId'
        },
      }
    }
  }
}
