import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

declare var ticker: any;

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

  currentPlayer: any;
  playerList = [];
  resultList = [];
  crickmlScore: number;
  currentPlayerName: string;
  awayScore: number;
  overallScore: number;
  recentScore: number;
  homeScore: number;

  constructor(
    public dialogRef: MatDialogRef<ResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResultsData) {
    this.playerList = data.players;
    this.resultList = data.results;
  }

  ngOnInit() {
    console.log(this.playerList);
    this.playerSelect(this.resultList[0][0]);
  }

  playerSelect(id) {
    this.currentPlayerName = this.playerList.find(x => x.id == id).player_name;
    this.currentPlayer = this.resultList.find(x => x[0] == id);
    console.log(this.currentPlayer);
    this.crickmlScore = this.currentPlayer[2];
    this.overallScore = this.currentPlayer[3];
    this.recentScore = this.currentPlayer[4];
    this.awayScore = this.currentPlayer[5];
    this.homeScore = this.currentPlayer[6];
  }
}

