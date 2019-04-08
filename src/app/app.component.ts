import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CrickBackService } from '../app/crick-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public rest: CrickBackService) { 
    this.getAllPlayers();    
  }

  title = 'CrickMLFront';

  url = '../assets/images/';

  playerPool: any = [];

  selectedPlayers = [
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

  getAllPlayers() {
    this.rest.getPlayers().subscribe((data: {}) => {
      console.log(data);
      this.playerPool = data;
    });
  }
}
