export class User {
  private _userame: string;
  private _email: string;
  private _password: string;
  private _passwordVerif: string;

  constructor(userame: string, email: string, password: string, passwordVerif: string) {
    this._userame = userame;
    this._email = email;
    this._password = password;
    this._passwordVerif = passwordVerif;
  }

  get userame(): string {
    return this._userame;
  }

  set userame(value: string) {
    this._userame = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get passwordVerif(): string {
    return this._passwordVerif;
  }

  set passwordVerif(value: string) {
    this._passwordVerif = value;
  }
}
