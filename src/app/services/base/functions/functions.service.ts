import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { thumbsNoImage } from 'src/environments/thumbs';

@Injectable({
  providedIn: 'root',
})
export class FunctionsService {
  private imagePath: string = `${environment.urlUploads}/`;

  constructor() {}

  groupBy(xs, f) {
    return xs.reduce(
      (r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r),
      {}
    );
  }

  setImageWithUploadLink(data: any, field: string) {
    Object.values(data).map((item: any) => {
      item[field] = item[field] ? `${this.imagePath}/${item[field]}` : '';
    });
    return data;
  }

  setNoImage(data: any, field: string) {
    let aux = [...data];
    aux.map((a) => {
      if (a[field]) {
        a[field] = a[field].split(',').map((b) => (b = this.imagePath + b));
      } else {
        a[field] = [thumbsNoImage.all];
      }
    });
    return aux;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
