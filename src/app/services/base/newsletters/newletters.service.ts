import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class NewlettersService {
  endpoint: string = "newsletter";
  constructor(
    private api: ApiService
  ) { }

  async sendNewsletter(email: string) {
    let response = await this.api.create(this.endpoint, email);
    return response.message == "success";
  }

  confirmNewsletter() {

  }
}
