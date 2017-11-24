import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {API_URLS} from "../config/API_URLS";
import {LocalhostSettings} from "../config/LocalhostSettings";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    this.http.post(LocalhostSettings.API_ENDPOINT + API_URLS.NEW_ACCOUNT, user, {observe: 'response'})
      .subscribe(res => {
        console.log(res);
      });
  }
}
