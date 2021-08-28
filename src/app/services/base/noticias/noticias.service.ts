import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { FunctionsService } from '../functions/functions.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private endpoint: string = "noticias";
  private _items: any = [];

  public get items(): any {
    return this._items;
  }
  public set items(value: any) {
    this._items = value;
  }

  constructor(
    private api: ApiService,
    private fn: FunctionsService
  ) { }

  async getItems() {
    let response = await this.api.read(this.endpoint);
    response = this.fn.setNoImage(response, "imagem");
    return response;
  }
  async getItem(id: number) {
    let response = await this.api.readId(this.endpoint, id);
    return response[0];
  }
}
