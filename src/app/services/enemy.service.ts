import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Enemy } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EnemyService {
  private items: BehaviorSubject<Enemy[]>;

  constructor() {
    this.items = new BehaviorSubject<Enemy[]>(new Array<Enemy>());
    this.generateEnemies();
  }
  addEnemy(newEnemy: Enemy) {
    this.items.next(this.items.getValue().concat([newEnemy]));
  }
  getEnemyByid(id) {
    return this.items.getValue().find((i) => i.id == id);
  }
  subscribeEnemies() {
    return this.items.asObservable();
  }

  private generateEnemies() {
    const booEnemy = new Enemy();
    booEnemy.id = 1;
    booEnemy.name = 'x';
    booEnemy.description = 'x';
    booEnemy.avatar = '/assets/enemies/boo.png';
    this.addEnemy(booEnemy);
  }
}
