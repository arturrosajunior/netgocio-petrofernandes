import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ProjetosService } from '../../../projetos/projetos.service';
import { BannersService } from '../../banners/banners.service';
import { FunctionsService } from '../../functions/functions.service';
import { NoticiasService } from '../../noticias/noticias.service';
import { PaginasService } from '../../paginas/paginas.service';
import { SettingsService } from '../../settings/settings.service';
import { TextosService } from '../../textos/textos.service';
import { TagsManagerService } from '../../integracoes/tag-manager/tags-manager.service';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  constructor(
    private textosService: TextosService,
    private noticiasService: NoticiasService,
    private paginasService: PaginasService,
    private settingsService: SettingsService,
    private projetosService: ProjetosService,
    private bannersService: BannersService,
    private tagsManagerService: TagsManagerService,
    private fn: FunctionsService,
    private router: Router
  ) {}

  async init() {
    await this.getManutencao();
    await this.setTags();

    return Promise.all([
      this.getSettings(),
      this.getTextos(),
      this.getNoticias(),
      this.getPaginas(),
      this.getProjetos(),
      this.getBanners(),
    ]);
  }

  async setTags() {
    return new Promise(async (resolve, reject) => {
      let response = await this.tagsManagerService.getItems();
      this.tagsManagerService.items = response;

      this.tagsManagerService.setTagsToHtml();

      resolve(true);
    });
  }

  async getManutencao() {
    let manutencao = await this.settingsService.getManutencao();
    this.settingsService.manutencao = manutencao;
    if (manutencao) {
      this.router.navigate(['error', 'manutencao']);
    }
  }

  getSettings() {
    return new Promise(async (resolve, reject) => {
      let response = await this.settingsService.getItems();
      this.settingsService.items = response;
      resolve(true);
    });
  }

  getTextos() {
    return new Promise(async (resolve, reject) => {
      let response = await this.textosService.getItems();
      this.textosService.items = response;
      resolve(true);
    });
  }

  getNoticias() {
    return new Promise(async (resolve, reject) => {
      let response = await this.noticiasService.getItems();
      this.noticiasService.items = response;
      resolve(true);
    });
  }

  getPaginas() {
    return new Promise(async (resolve, reject) => {
      let response = await this.paginasService.getItems();
      this.paginasService.items = response;

      let responseConfig = await this.paginasService.getConfig();
      let aux = this.fn.setNoImage(responseConfig, 'banner_imagem');
      aux = this.fn.setNoImage(aux, 'imagem');
      this.paginasService.config = aux;

      resolve(true);
    });
  }

  getProjetos() {
    return new Promise(async (resolve, reject) => {
      let response = await this.projetosService.getItems();
      this.projetosService.items = response;
      resolve(true);
    });
  }
  getBanners() {
    return new Promise(async (resolve, reject) => {
      let response = await this.bannersService.getItems();
      this.bannersService.items = response;
      resolve(true);
    });
  }
}
