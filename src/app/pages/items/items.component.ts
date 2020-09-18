import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from 'src/app/models';
import { ItemService } from 'src/app/services/item.service';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'mario-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(private itemService: ItemService) {}
  displayItems$ = new Observable<Array<Item>>();
  filter: FormControl;
  filter$: Observable<string>;
  filteredItems$: Observable<Item[]>;
  ngOnInit(): void {
    this.displayItems$ = this.itemService.subscribeItems();
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredItems$ = combineLatest([
      this.displayItems$,
      this.filter$,
    ]).pipe(
      map(([states, filterString]) =>
        states.filter(
          (state) =>
            state.title.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
        )
      )
    );
  }
}
