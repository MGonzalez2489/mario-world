import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'mario-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item: Item;
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) {
    const itemId = this.activatedRoute.snapshot.params.id;
    this.item = this.itemService.getItemByid(itemId);
    console.log('ITEM', this.item);
  }

  ngOnInit(): void {}
}
