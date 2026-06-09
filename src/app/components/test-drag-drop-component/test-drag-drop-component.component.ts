import { Component,ChangeDetectionStrategy,  signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-test-drag-drop-component',
  standalone: true,
  imports: [CommonModule, DragDropModule,CdkDrag,MatExpansionModule, CdkDragHandle, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './test-drag-drop-component.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './test-drag-drop-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestDragDropComponentComponent {

  readonly panelOpenState = signal(false);

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

