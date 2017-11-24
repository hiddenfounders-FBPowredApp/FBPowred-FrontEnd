export class User {
  private username: string;
  private email: string;
  private password: string;
  private passwordVerif: string;

  constructor(username: string, email: string, password: string, passwordVerif: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordVerif = passwordVerif;
  }
}
