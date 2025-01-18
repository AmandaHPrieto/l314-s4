import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: false,
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input() user: any;
}

