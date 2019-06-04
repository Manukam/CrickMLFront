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
  sortMode: number;
  order = [];
  playerListCopy = [];
  resultMode = 1;
  constructor(
    public dialogRef: MatDialogRef<ResultsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResultsData) {
    this.playerList = data.players;
    this.resultList = data.results;
  }

  ngOnInit() {
    console.log(this.resultList);
    this.playerSelect(this.resultList[0][0]);
    this.resultMode = this.resultList[this.resultList.length - 1];
    console.log("result Mode:" + this.resultMode);
  }

  playerSelect(id) {
    if (this.resultMode == 1) {
      this.currentPlayerName = this.playerList.find(x => x.id == id).player_name;
      this.currentPlayer = this.resultList.find(x => x[0] == id);
      // console.log(this.currentPlayer);
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
      this.currentPlayerId = this.currentPlayer[0];
      ticker(this.crickmlScore, 0);
    } else {
      this.currentPlayerName = this.playerList.find(x => x.id == id).player_name;
      this.currentPlayer = this.resultList.find(x => x[0] == id);
      this.overallScore = Math.ceil(this.currentPlayer[2] * 100);
      this.recentScore = Math.ceil(this.currentPlayer[3] * 100);
      this.awayScore = Math.ceil(this.currentPlayer[4] * 100);
      this.homeScore = Math.ceil(this.currentPlayer[5] * 100);
      this.currentPlayerId = this.currentPlayer[0];
      this.crickmlScore = this.currentPlayer[1];
      this.mileStoneScore = 0;
      this.domesticScore = 0;
    }
  }

  sortPlayers() {
    // console.log('event fired');
    this.order = [];
    this.resultList.sort((a, b) => (a[this.sortMode] > b[this.sortMode]) ? -1 : 1);
    // tslint:disable-next-line:only-arrow-functions
    this.resultList.forEach(item => this.order.push(item[0]));
    // console.log(this.order);
    this.playerListCopy = this.playerList;
    this.playerList = [];
    this.order.forEach(item => this.playerList.push(this.playerListCopy.find(x => x.id == item)));
    // console.log(this.playerList);
  }

}

