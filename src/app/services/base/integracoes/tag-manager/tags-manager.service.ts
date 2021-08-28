import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TagsManagerService {
  private endpoint: string = "/integracoes/tagmanager";
  private _items: any = [];

  public get items(): any {
    return this._items;
  }
  public set items(value: any) {
    this._items = value;
  }

  constructor(
    private api: ApiService,
  ) { }

  async getItems() {
    let response = await this.api.read(this.endpoint);
    return response;
  }
  async getItem(id: number) {
    let response = await this.api.readId(this.endpoint, id);
    return response[0];
  }

  async setTagsToHtml() {
    let aux = this.items;
    aux.head = Object.values(aux.head).reduce((a: any, b: any) => (a.tag || a) + " " + b.tag, "");
    aux.footer = Object.values(aux.footer).reduce((a: any, b: any) => (a.tag || a) + " " + b.tag, "");
    document.head.innerHTML = document.head.innerHTML + aux.head;
    document.body.innerHTML = document.body.innerHTML + aux.footer;
  }
}
