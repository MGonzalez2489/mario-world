import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: BehaviorSubject<Item[]>;

  constructor() {
    this.items = new BehaviorSubject<Item[]>(new Array<Item>());
    this.generateItems();
  }
  addItem(newItem: Item) {
    this.items.next(this.items.getValue().concat([newItem]));
  }
  subscribeItems() {
    return this.items.asObservable();
  }

  private generateItems() {
    const turnipItem = new Item();
    turnipItem.id = 1;
    turnipItem.title = 'Turnip';
    turnipItem.description =
      "These vegetables, which first appeared in Super Mario Bros. 2, can be plucked from the ground and hurled at enemies. Unlike regular veggies, they often sport eyes or even faces; in fact, when Princess Peach plucks them from the ground to use as projectiles, the expressions on their faces dictate how much damage they'll do.";
    turnipItem.image = '/assets/items/Turnip.png';
    this.addItem(turnipItem);

    const bellotaItem = new Item();
    bellotaItem.id = 2;
    bellotaItem.title = 'Super Acorn';
    bellotaItem.description =
      'The Super Acorn is a power-up item that debuted in New Super Mario Bros. U. The item resembles an acorn with red and yellow stripes on top and a red face with eyes on the bottom. It transforms playable characters into their Flying Squirrel forms. There exists a stronger variant called the P-Acorn.';
    bellotaItem.image = '/assets/items/bellota.png';
    this.addItem(bellotaItem);

    const fireflowerItem = new Item();
    fireflowerItem.id = 3;
    fireflowerItem.title = 'Fire FLower';
    fireflowerItem.description =
      'Fire Flowers, also known as Flame Flowers, are a power-up that are obtainable in many games in the Mario franchise, originating from Super Mario Bros. They can be found inside blocks that normally contain Super Mushrooms if the player is already in their Super form (or in later games any other powered-up form), and obtaining one transforms the player into their Fire form, allowing them to throw fireballs. The Ice Flower is the polar opposite of the Fire Flower.';
    fireflowerItem.image = '/assets/items/fireflower.png';
    this.addItem(fireflowerItem);

    const leafItem = new Item();
    leafItem.id = 4;
    leafItem.title = 'Super Leaf';
    leafItem.description =
      'A Super Leaf (also known as the Raccoon Leaf or Tanooki Leaf) is one of the many power-up items in the Mario franchise. Super Leaves originated in the game Super Mario Bros. 3, where they turn Mario or Luigi into Raccoon Mario or Raccoon Luigi, respectively. As such, they grow raccoon ears and a raccoon tail, the latter of which lets them glide, fly after a running start, and tail whip.';
    leafItem.image = '/assets/items/leaf.png';
    this.addItem(leafItem);

    const mushroomItem = new Item();
    mushroomItem.id = 5;
    mushroomItem.title = 'Mushroom';
    mushroomItem.description =
      'Mushrooms are recurring items in the Mario franchise. Their effect on the player character varies from game to game. In both the Mario Kart and Mario Party series, the Mushrooms share an appearance with the Super Mushrooms from the Super Mario series.';
    mushroomItem.image = '/assets/items/mushroom.png';
    this.addItem(mushroomItem);

    const starItem = new Item();
    starItem.id = 6;
    starItem.title = 'Power Star';
    starItem.description =
      "Power Stars, also referred to as Stars, are collectible items that can grant Mario access to more levels in-game (like Goal Poles from the original Super Mario Bros. and the New Super Mario Bros. series), unlike the similar-looking Super Stars, which only give brief invincibility. In Super Mario 64, Super Mario Galaxy, and Super Mario Galaxy 2, when the star for any given level has been collected, playing the level again will turn the Star into a translucent version of itself (similar to how Star Coins work). This Star can be collected, but it will not add to the player's total Star count.";
    starItem.image = '/assets/items/star.png';
    this.addItem(starItem);
  }
}
