/* tslint:disable */

declare var Object: any;
export interface EmployeeInterface {
  "name"?: string;
  "prenom"?: string;
  "image"?: any;
  "id"?: any;
}

export class Employee implements EmployeeInterface {
  "name": string;
  "prenom": string;
  "image": any;
  "id": any;
  constructor(data?: EmployeeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Employee`.
   */
  public static getModelName() {
    return "Employee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Employee for dynamic purposes.
  **/
  public static factory(data: EmployeeInterface): Employee{
    return new Employee(data);
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
      name: 'Employee',
      plural: 'Employees',
      path: 'Employees',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
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
