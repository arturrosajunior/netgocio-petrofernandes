import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'noHtml' })
export class noHtmlPipe implements PipeTransform {
  transform(value: string): string {
    if (value == null || value == undefined) {
      return '';
    }
    return value.replace(/<[^>]*>/g, '');
  }
}
