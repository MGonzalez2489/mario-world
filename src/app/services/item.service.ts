import { Injectable } from '@angular/core';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<Item>= new Array<Item>

  constructor() { }
}
