import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Item } from "../types/item";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  editable = false;

  // @Input(), @Output(), and EventEmitter facilitate communication between your two components
  // @Input() serves as a doorway for data to come into the component,
  // @Output() acts as a doorway for data to go out of the component.
  // An @Output() has to be of type EventEmitter, so that a component can raise an event when there's data ready to share with another component.
  @Input() item!: Item; // The ! in the class's property declaration is called a definite assignment assertion. This operator tells TypeScript that the item field is always initialized and not undefined,
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;

    this.editable = false;
    this.item.description = description;
  }
}
