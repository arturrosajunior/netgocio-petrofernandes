import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private endpoint: string = "settings";
  private _items: any = [];
  private _manutencao: any = [];

  public get manutencao(): any {
    return this._manutencao;
  }
  public set manutencao(value: any) {
    this._manutencao = value;
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
  getManutencao() {
    let response = this.api.read(`${this.endpoint}/manutencao`);
    return response;
  }
}
