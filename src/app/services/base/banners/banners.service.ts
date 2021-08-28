import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { FunctionsService } from '../functions/functions.service';

@Injectable({
  providedIn: 'root',
})
export class BannersService {
  private endpoint: string = 'banners';
  private _items: any = [];

  public get items(): any {
    return this._items;
  }
  public set items(value: any) {
    this._items = value;
  }

  constructor(private api: ApiService, private fn: FunctionsService) {}

  async getItems() {
    let response = await this.api.read(this.endpoint);
    Object.values(response).forEach((v, k) => {
      response[v[k].ref] = this.fn.setNoImage(v, 'desktop_imagem');
      response[v[k].ref] = this.fn.setNoImage(v, 'mobile_imagem');
    });

    return response;
  }
  async getItem(id: number) {
    let response = await this.api.readId(this.endpoint, id);
    return response[0];
  }
}
