import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../start-wars-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  swService: StarWarsService;
  
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    // const swService = new StarWarsService;
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
}