import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models';

@Component({
  selector: 'mario-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item;
  constructor() {}

  ngOnInit(): void {}
}
