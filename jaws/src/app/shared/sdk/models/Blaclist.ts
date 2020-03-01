/* tslint:disable */

declare var Object: any;
export interface BlaclistInterface {
  "nom"?: string;
  "prenom"?: string;
  "image"?: any;
  "id"?: any;
}

export class Blaclist implements BlaclistInterface {
  "nom": string;
  "prenom": string;
  "image": any;
  "id": any;
  constructor(data?: BlaclistInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Blaclist`.
   */
  public static getModelName() {
    return "Blaclist";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Blaclist for dynamic purposes.
  **/
  public static factory(data: BlaclistInterface): Blaclist{
    return new Blaclist(data);
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
      name: 'Blaclist',
      plural: 'black',
      path: 'black',
      idName: 'id',
      properties: {
        "nom": {
          name: 'nom',
          type: 'string'
        },
        "prenom": {
          name: 'prenom',
          type: 'string'
        },
        "image": {
          name: 'image',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
