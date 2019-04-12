import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ResultsData {
  players: [];
  results: [];
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  playerList = [];
  resultList = [];

  constructor(
    public dialogRef: MatDialogRef<ResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResultsData) {
    this.playerList = data.players;
    this.resultList = data.results;
  }

  ngOnInit() {
    console.log(this.playerList);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

