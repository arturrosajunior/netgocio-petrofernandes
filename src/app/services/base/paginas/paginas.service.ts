import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PaginasService {
  private endpoint: string = "paginas";
  private _items: any = [];
  private _config: any = [];

  public get config(): any {
    return this._config;
  }
  public set config(value: any) {
    this._config = value;
  }

  public get items(): any {
    return this._items;
  }
  public set items(value: any) {
    this._items = value;
  }

  constructor(
    private api: ApiService,
  ) { }

  getItems() {
    let response = this.api.read(this.endpoint);
    return response;
  }
  getConfig() {
    let response = this.api.read(`${this.endpoint}-config`);
    return response;
  }
}
