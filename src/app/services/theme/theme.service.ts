import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themeChange = '_petrofernandes-theme';

  changeTheme(theme) {
    this.themeChange = theme;
  }

  constructor() {}
}
