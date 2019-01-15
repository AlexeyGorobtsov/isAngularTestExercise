export class User {
  constructor(
    public email: string,
    public password: string,
    public name: string,
    public id?: number,
    public token?: string
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.id = id;
    this.token = token;
  }
}
