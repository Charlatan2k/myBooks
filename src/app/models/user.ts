export class User {
  public id_user: number;
  public name: string;
  public last_name: string;
  public email: string;
  public photo: string;
  public password: string;

  constructor(name, last_name, email) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.photo;
  }
}
