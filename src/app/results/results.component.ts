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
  currentPlayerId: number;
  domesticScore = 0;
  mileStoneScore = 0;
  searchKey: string;
  
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
    if (this.currentPlayer[7] == 1) {
      this.crickmlScore = Math.ceil(this.currentPlayer[2] * 100);
      this.mileStoneScore = 0;
      this.domesticScore = 0;
    } else {
      this.crickmlScore = Math.ceil((this.currentPlayer[2] * 100) / 2);
      this.mileStoneScore = Math.ceil(this.currentPlayer[5] * 100);
      this.domesticScore = Math.ceil((this.currentPlayer[6] * 100));
    }
    this.overallScore = Math.ceil(this.currentPlayer[3] * 100);
    this.recentScore = Math.ceil(this.currentPlayer[4] * 100);
    this.awayScore = Math.ceil(this.currentPlayer[5] * 100);
    this.homeScore = Math.ceil(this.currentPlayer[6] * 100);
    this.currentPlayerId = this.currentPlayer[0]
    ticker(this.crickmlScore, 0);
  }
}

