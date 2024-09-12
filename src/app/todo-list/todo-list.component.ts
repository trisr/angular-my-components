import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Item } from '../types/item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-todo-list',
  // selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ]

  // getter
  // returns the done or pending items depending on how the user filters the view
  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    // method unshift() to add a new item to the beginning of the array and the top of the list
    // alternatively use push(), which would add the new item to the end of the array and the bottom of the list.
    this.allItems.unshift({
      description,
      done: false
    })
  }

  remove(item: Item) {
    // Array.splice() method to remove one item at the indexOf the relevant item
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
