import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/services/base/settings/settings.service';

@Component({
  selector: 'app-site-em-manutencao',
  templateUrl: './site-em-manutencao.component.html',
  styleUrls: ['./site-em-manutencao.component.css', '../erros.component.css']
})
export class SiteEmManutencaoComponent implements OnInit {
  isManutencao: boolean;
  constructor(
    private settingsService: SettingsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isManutencao = this.settingsService.manutencao;
    if (!this.isManutencao) {
      this.router.navigate(['']);
    }
  }


}
