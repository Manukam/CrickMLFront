import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrickMLFront';

  url = 'http://clipart-library.com/data_images/567140.gif';

  playerPool = [
    'Kusal Mendis',
    'Suranga Lakmal'
  ];

  selectedPlayers = [
    'Dimuth Karunarathne',
    'Akila Dananjaya'
  ];

  dropped(event: CdkDragDrop<string[]>) {
    console.log('triggered');
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
