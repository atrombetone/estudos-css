import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resource } from '../models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }

  getResources(): Observable<Array<Resource>> {
    let resources = [
      {id: 1, login: 'atrombetone', name: 'Andre Luiz Trombetone', paper: 'developer'},
      {id: 1, login: 'carlosss', name: 'Carlos Renan Silvestre', paper: 'developer'},
      {id: 1, login: 'jmoraes', name: 'Josué Moraes', paper: 'teste'},
      {id: 1, login: 'ckatsuo', name: 'Cleyton Katsuo', paper: 'developer'},
      {id: 1, login: 'blima', name: 'Bruna Lima', paper: 'teste'}
    ];

    return of(resources);
  }
}
