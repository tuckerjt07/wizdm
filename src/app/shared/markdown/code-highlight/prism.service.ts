import { Injectable } from '@angular/core';

import * as prism from 'prismjs';
import './prism.languages';

@Injectable({
  providedIn: 'root'
})
export class PrismService {

  constructor() {}

  public tokenize(source: string, language: string): any[] {
    return (source && language) ? prism.tokenize(source, prism.languages[language]) : [];
  }
}