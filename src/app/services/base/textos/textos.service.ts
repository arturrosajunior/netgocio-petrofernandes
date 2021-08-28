import { Injectable } from '@angular/core';
import { ApiService } from '../../base/api/api.service';
import { FunctionsService } from '../functions/functions.service';

@Injectable({
  providedIn: 'root'
})
export class TextosService {
  private endpoint: string = "textos";
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
    let aux = this.fn.setImageWithUploadLink(response,"imagem");
    return aux;
  }

  async getItem(id: number) {
    let response = await this.api.readId(this.endpoint, id);
    return response[0];
  }
}
