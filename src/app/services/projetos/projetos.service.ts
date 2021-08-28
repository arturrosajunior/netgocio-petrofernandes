import { Injectable } from '@angular/core';
import { ApiService } from '../base/api/api.service';
import { FunctionsService } from '../base/functions/functions.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {
  private endpoint: string = "projetos";
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
    response = response.filter(a => a.visivel = a.visivel == 1);
    response = this.fn.setNoImage(response, "images");
    return response;
  }

  async getItem(id: number) {
    let response = await this.api.readId(this.endpoint, id);
    response = this.fn.setNoImage(response, "imagem");
    return response[0];
  }
}
